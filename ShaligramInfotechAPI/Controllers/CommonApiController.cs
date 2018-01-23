﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using ShaligramInfotechAPI.Common;
using ShaligramInfotechAPI.Models;
using System.IO;
using ShaligramInfotechAPI.Entities;
using System.Data.SqlClient;
using System.Threading.Tasks;
using ShaligramInfotechAPI.Helper;
using Newtonsoft.Json;

namespace ShaligramInfotechAPI.Controllers
{
    public class CommonApiController : ApiController
    {
        private readonly UnitOfWork _unitOfWork = null;

        public CommonApiController()
        {
            _unitOfWork = new UnitOfWork();
            //_CandidateService = new CandidateService();
        }

        public class RecaptchaResponse
        {
            [JsonProperty("success")]
            public bool Success { get; set; }

            [JsonProperty("error-codes")]
            public IEnumerable<string> ErrorCodes { get; set; }

            [JsonProperty("challenge_ts")]
            public DateTime ChallengeTs { get; set; }

            [JsonProperty("hostname")]
            public string Hostname { get; set; }
        }

        [HttpGet]
        public bool Validate(string encodedResponse)
        {
            if (string.IsNullOrEmpty(encodedResponse)) return false;

            var secret = "6LdSvz8UAAAAAAfUnqC4KtCxgAZx6XWVUl1ZDIno";
            if (string.IsNullOrEmpty(secret)) return false;

            var client = new System.Net.WebClient();

            var googleReply = client.DownloadString(
                $"https://www.google.com/recaptcha/api/siteverify?secret={secret}&response={encodedResponse}");

            return JsonConvert.DeserializeObject<RecaptchaResponse>(googleReply).Success;
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SaveContactInformation()
        {
            //var list = _unitOfWork.SQLNonQuery("EXEC SaveContactInformation @Name,@PhoneNumber,@EmailAddress,@City,@Company,@Message", new SqlParameter[]
            //             {
            //                 new SqlParameter("@Name",objContactUsEntity.Name),
            //                 new SqlParameter("@PhoneNumber",objContactUsEntity.PhoneNumber),
            //                 new SqlParameter("@EmailAddress",objContactUsEntity.EmailAddress),
            //                 new SqlParameter("@City",objContactUsEntity.City),
            //                 new SqlParameter("@Company",objContactUsEntity.Company),
            //                 new SqlParameter("@Message",objContactUsEntity.Message),
            //             });

            //string AdminMail = "mansi.p@shaligraminfotech.com";
            //string bodyAdminTemplate = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/EmailTemplate/AdminContactUs.html"));
            //bodyAdminTemplate = bodyAdminTemplate.Replace("[@Name]", objContactUsEntity.Name);
            //bodyAdminTemplate = bodyAdminTemplate.Replace("[@Email]", objContactUsEntity.EmailAddress);
            //bodyAdminTemplate = bodyAdminTemplate.Replace("[@Mobile]", objContactUsEntity.PhoneNumber);
            //bodyAdminTemplate = bodyAdminTemplate.Replace("[@company]", objContactUsEntity.Company);
            //bodyAdminTemplate = bodyAdminTemplate.Replace("[@Message]", objContactUsEntity.Message);

            //Task Admintask = new Task(() => Email.Send(AdminMail, bodyAdminTemplate, "Mail Sent Successfully", "", null));
            //Admintask.Start();

            //return Request.CreateResponse(HttpStatusCode.OK, list);

            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                {
                    throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
                }

                var root = HttpContext.Current.Server.MapPath("~/ContactUsAttachment");
                Directory.CreateDirectory(root);
                var provider = new MultipartFormDataStreamProvider(root);
                var result = await Request.Content.ReadAsMultipartAsync(provider);


                var contactId = result.FormData["ContactUsId"];
                if (contactId == null)
                {
                    throw new HttpResponseException(HttpStatusCode.BadRequest);
                }

                ContactUsEntity objContactUsEntity = new ContactUsEntity();
                objContactUsEntity.ContactUsId = Convert.ToInt32(result.FormData["ContactUsId"].ToString());
                objContactUsEntity.Name = result.FormData["Name"].ToString();
                objContactUsEntity.PhoneNumber = result.FormData["PhoneNumber"].ToString();
                objContactUsEntity.EmailAddress = result.FormData["EmailAddress"].ToString();
                objContactUsEntity.City = result.FormData["City"].ToString();
                objContactUsEntity.Company = result.FormData["Company"].ToString();
                objContactUsEntity.Message = result.FormData["Message"].ToString();

                var contactusId = _unitOfWork.SQLStringReturn("EXEC SaveContactInformation @Name,@PhoneNumber,@EmailAddress,@City,@Company,@Message", new SqlParameter[]
                             {
                             new SqlParameter("@Name", objContactUsEntity.Name),
                             new SqlParameter("@PhoneNumber",objContactUsEntity.PhoneNumber),
                             new SqlParameter("@EmailAddress",objContactUsEntity.EmailAddress),
                             new SqlParameter("@City",objContactUsEntity.City),
                             new SqlParameter("@Company",objContactUsEntity.Company),
                             new SqlParameter("@Message",objContactUsEntity.Message)
                             });

                if (Convert.ToInt32(contactusId) > 0)
                {
                    HttpFileCollection uploadedFiles = HttpContext.Current.Request.Files;
                    for (int i = 0; i < uploadedFiles.Count; i++)
                    {
                        HttpPostedFile file = uploadedFiles[i];
                        if (file.ContentLength > 0)
                        {
                            string fileExtension = Path.GetExtension(file.FileName);
                            string fileName = objContactUsEntity.Name.Replace(" ", "_") + Guid.NewGuid() + fileExtension;

                            file.SaveAs(root + "\\" + fileName);

                            var attachmentId = _unitOfWork.SQLStringReturn("EXEC SaveContactUsAttchments @ContactUsId,@Path", new SqlParameter[]
                            {
                             new SqlParameter("@ContactUsId", contactusId),
                             new SqlParameter("@Path",fileName)
                            });
                        }
                    }

                    string AdminMail = System.Configuration.ConfigurationManager.AppSettings["ContactUsEmailId"];
                    string bodyAdminTemplate = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/EmailTemplate/AdminContactUs.html"));
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Name]", objContactUsEntity.Name);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Email]", objContactUsEntity.EmailAddress);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Mobile]", objContactUsEntity.PhoneNumber);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@company]", objContactUsEntity.Company);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Message]", objContactUsEntity.Message);

                    Task Admintask = new Task(() => Email.Send(AdminMail, bodyAdminTemplate, "Mail Sent Successfully", "", null));
                    Admintask.Start();
                }

                return Request.CreateResponse(HttpStatusCode.OK, "success!");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error!");
            }
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SaveRequestQuote()
        {
            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                {
                    throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
                }

                var root = HttpContext.Current.Server.MapPath("~/RequestQuoteAttachment");
                Directory.CreateDirectory(root);
                var provider = new MultipartFormDataStreamProvider(root);
                var result = await Request.Content.ReadAsMultipartAsync(provider);


                var contactId = result.FormData["RequestQuoteId"];
                if (contactId == null)
                {
                    throw new HttpResponseException(HttpStatusCode.BadRequest);
                }

                RequestQuoteEntity objRequestQuoteEntity = new RequestQuoteEntity();
                objRequestQuoteEntity.RequestQuoteId = Convert.ToInt32(result.FormData["RequestQuoteId"].ToString());
                objRequestQuoteEntity.FullName = result.FormData["FullName"].ToString();
                objRequestQuoteEntity.PhoneNumber = result.FormData["PhoneNumber"].ToString();
                objRequestQuoteEntity.EmailAddress = result.FormData["EmailAddress"].ToString();
                objRequestQuoteEntity.City = result.FormData["City"].ToString();
                objRequestQuoteEntity.Company = result.FormData["Company"].ToString();
                objRequestQuoteEntity.ProjectTypeId = Convert.ToInt32(result.FormData["ProjectTypeId"]);
                objRequestQuoteEntity.BudgetId = Convert.ToInt32(result.FormData["BudgetId"]);
                objRequestQuoteEntity.ProjectDescription = result.FormData["ProjectDescription"].ToString();

                var requestQuoteId = _unitOfWork.SQLStringReturn("EXEC SaveRequestQuotes @FullName,@PhoneNumber,@EmailAddress," +
                                    "@City,@Company,@ProjectTypeId,@BudgetId,@ProjectDescription", new SqlParameter[]
                             {
                             new SqlParameter("@FullName", objRequestQuoteEntity.FullName),
                             new SqlParameter("@PhoneNumber",objRequestQuoteEntity.PhoneNumber),
                             new SqlParameter("@EmailAddress",objRequestQuoteEntity.EmailAddress),
                             new SqlParameter("@City",objRequestQuoteEntity.City),
                             new SqlParameter("@Company",objRequestQuoteEntity.Company),
                             new SqlParameter("@ProjectTypeId",objRequestQuoteEntity.ProjectTypeId),
                             new SqlParameter("@BudgetId",objRequestQuoteEntity.BudgetId),
                             new SqlParameter("@ProjectDescription",objRequestQuoteEntity.ProjectDescription)
                             });

                if (Convert.ToInt32(requestQuoteId) > 0)
                {
                    HttpFileCollection uploadedFiles = HttpContext.Current.Request.Files;
                    for (int i = 0; i < uploadedFiles.Count; i++)
                    {
                        HttpPostedFile file = uploadedFiles[i];
                        if (file.ContentLength > 0)
                        {
                            string fileExtension = Path.GetExtension(file.FileName);
                            string fileName = objRequestQuoteEntity.FullName.Replace(" ", "_") + Guid.NewGuid() + fileExtension;

                            file.SaveAs(root + "\\" + fileName);

                            var attachmentId = _unitOfWork.SQLStringReturn("EXEC SaveRequestQuoteAttchments @RequestQuoteId,@Path", new SqlParameter[]
                            {
                             new SqlParameter("@RequestQuoteId", requestQuoteId),
                             new SqlParameter("@Path",fileName)
                            });
                        }
                    }

                    string AdminMail = System.Configuration.ConfigurationManager.AppSettings["ContactUsEmailId"];
                    string bodyAdminTemplate = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/EmailTemplate/AdminRequestQuote.html"));
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@FullName]", objRequestQuoteEntity.FullName);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Email]", objRequestQuoteEntity.EmailAddress);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Mobile]", objRequestQuoteEntity.PhoneNumber);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@company]", objRequestQuoteEntity.Company);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@ProjectDescription]", objRequestQuoteEntity.ProjectDescription);

                    Task Admintask = new Task(() => Email.Send(AdminMail, bodyAdminTemplate, "Mail Sent Successfully", "", null));
                    Admintask.Start();
                }

                return Request.CreateResponse(HttpStatusCode.OK, "success!");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error!");
            }
        }

        //[HttpPost]
        //public HttpResponseMessage SaveInformation(InquiryDetail allDataobj)
        //{
        //    ShaligramConsultancyEntities objEntities = new ShaligramConsultancyEntities();
        //    InquiryDetail objinqiry = new InquiryDetail();
        //    objinqiry.Name = allDataobj.Name;
        //    objinqiry.Email = allDataobj.Email;
        //    objinqiry.Phone = allDataobj.Phone;
        //    objinqiry.EMI = allDataobj.EMI;
        //    objinqiry.Rupees = allDataobj.Rupees;
        //    objinqiry.InquiryFor = allDataobj.InquiryFor;
        //    objinqiry.CreatedDate = DateTime.Now;
        //    objEntities.InquiryDetails.Add(objinqiry);
        //    objEntities.SaveChanges();


        //    //Image Path 
        //    var imagepath = System.Configuration.ConfigurationManager.AppSettings["tempLogo"];
        //    //owner mail
        //    var mappedPath = HttpContext.Current.Server.MapPath("~/EmailTemplate/EmailTemplate.html");

        //    string bodyTemplate = System.IO.File.ReadAllText(mappedPath);
        //    //string ToEmail = "richa.t@shaligraminfotech.com,amit.p@shaligraminfotech.com";
        //    bodyTemplate = bodyTemplate.Replace("[@Name]", allDataobj.Name);
        //    bodyTemplate = bodyTemplate.Replace("[@Email]", allDataobj.Email);
        //    bodyTemplate = bodyTemplate.Replace("[@Phone]", allDataobj.Phone);
        //    bodyTemplate = bodyTemplate.Replace("[@EnquiryFor]", allDataobj.InquiryFor);
        //    bodyTemplate = bodyTemplate.Replace("[@Path]", imagepath);
        //    EmailHelper.SendAsyncEmail("", "[Shaligram Consultancy] Receive New Enquiry For - " + allDataobj.InquiryFor, bodyTemplate, true);

        //    //thank u email
        //    var mappedPathThankU = HttpContext.Current.Server.MapPath("~/EmailTemplate/ThankuEmail.html");
        //    string bodyTemplateThankYou = System.IO.File.ReadAllText(mappedPathThankU);

        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Name]", allDataobj.Name);
        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@EnquiryFor]", allDataobj.InquiryFor);
        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Email]", allDataobj.Email);
        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Phone]", allDataobj.Phone);
        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Path]", imagepath);
        //    EmailHelper.SendAsyncEmail(allDataobj.Email, "Thank You For Your Inquiry With Shaligram Consultancy.", bodyTemplateThankYou, true);



        //    return Request.CreateResponse(HttpStatusCode.OK, true);

        //}

        //[HttpPost]
        //public HttpResponseMessage SaveContactUSInformation(ContactUsEnquiry allDataobj)
        //{
        //    ShaligramConsultancyEntities objEntities = new ShaligramConsultancyEntities();
        //    if (allDataobj != null)
        //    {
        //        objEntities.ContactUsEnquiries.Add(allDataobj);
        //        objEntities.SaveChanges();
        //    }



        //    //Image Path 
        //    var imagepath = System.Configuration.ConfigurationManager.AppSettings["tempLogo"];
        //    //owner mail
        //    var mappedPath = HttpContext.Current.Server.MapPath("~/EmailTemplate/contactUsEmail.html");

        //    string bodyTemplate = System.IO.File.ReadAllText(mappedPath);
        //    //string ToEmail = "richa.t@shaligraminfotech.com,amit.p@shaligraminfotech.com";
        //    bodyTemplate = bodyTemplate.Replace("[@Name]", allDataobj.Name);
        //    bodyTemplate = bodyTemplate.Replace("[@Email]", allDataobj.Email);
        //    bodyTemplate = bodyTemplate.Replace("[@Phone]", allDataobj.Phone);
        //    bodyTemplate = bodyTemplate.Replace("[@City]", allDataobj.City);
        //    bodyTemplate = bodyTemplate.Replace("[@Path]", imagepath);
        //    EmailHelper.SendAsyncEmail("", "[Shaligram Consultancy] Receive New Contact Us Request", bodyTemplate, true);

        //    //thank u email
        //    var mappedPathThankU = HttpContext.Current.Server.MapPath("~/EmailTemplate/contactUsThankuEmail.html");
        //    string bodyTemplateThankYou = System.IO.File.ReadAllText(mappedPathThankU);

        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Name]", allDataobj.Name);
        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@City]", allDataobj.City);
        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Email]", allDataobj.Email);
        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Phone]", allDataobj.Phone);
        //    bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Path]", imagepath);
        //    EmailHelper.SendAsyncEmail(allDataobj.Email, "Thank You For Your Contact Request With Shaligram Consultancy.", bodyTemplateThankYou, true);



        //    return Request.CreateResponse(HttpStatusCode.OK, true);

        //}

        [HttpGet]
        public HttpResponseMessage GetFiles(string folderPath)
        {
            List<string> fileList = new List<string>();
            if (!string.IsNullOrWhiteSpace(folderPath) && System.IO.Directory.Exists(HttpContext.Current.Server.MapPath("~") + folderPath))
            {
                fileList = new DirectoryInfo(HttpContext.Current.Server.MapPath("~/") + folderPath).GetFiles().Select(o => o.Name).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, fileList);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, fileList);
            }
        }

        //[HttpGet]
        //public HttpResponseMessage GetCityList()
        //{

        //    ShaligramConsultancyEntities objEntities = new ShaligramConsultancyEntities();
        //    List<CityList> objListcity = objEntities.CityLists.ToList();

        //    return Request.CreateResponse(HttpStatusCode.OK, objListcity);

        //}


    }
}
