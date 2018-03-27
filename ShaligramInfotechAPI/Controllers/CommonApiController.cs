using System;
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
using System.ComponentModel;
using System.Reflection;
using System.Drawing;

namespace ShaligramInfotechAPI.Controllers
{
    public enum ProjectTypeEnum
    {
        [DescriptionAttribute("Mobile App Development")]
        Mobile_App_Development = 1,
        [DescriptionAttribute("Web Development")]
        Web_Development = 2,
        [DescriptionAttribute("SaaS")]
        SaaS = 3,
        [DescriptionAttribute("Cloud App")]
        Cloud_App = 4,
        [DescriptionAttribute("CRM")]
        CRM = 5,
        [DescriptionAttribute("ERP")]
        ERP = 6,
        [DescriptionAttribute("eCommerce")]
        eCommerce = 7,
        [DescriptionAttribute("Social Networking")]
        Social_Networking = 8,
        [DescriptionAttribute("Other")]
        Other = 9
    };

    public enum BudgetEnum
    {
        [DescriptionAttribute("Less than 10K USD")]
        LesstenSD = 1,

        [DescriptionAttribute("10K USD to 20K USD")]
        tenktotwentykUSD = 2,

        [DescriptionAttribute("20K USD to 50K USD")]
        twentyktofiftykUSD = 3,

        [DescriptionAttribute("50K USD to 100K USD")]
        fiftyktohundredkUSD = 4,

        [DescriptionAttribute("100K USD and more")]
        hundredkandmore = 5
    };

    public static class EnumDescription
    {
        public static string ToDescription(this Enum en)
        {
            Type type = en.GetType();
            MemberInfo[] memInfo = type.GetMember(en.ToString());

            if (memInfo != null && memInfo.Length > 0)
            {
                object[] attrs = memInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);

                if (attrs != null && attrs.Length > 0)
                    return ((DescriptionAttribute)attrs[0]).Description;
            }
            return en.ToString();
        }
    }

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
            // for local
            //var secret = "6LdSvz8UAAAAAAfUnqC4KtCxgAZx6XWVUl1ZDIno";

            //for company
            var secret = "6Ld6REYUAAAAAOiBvyukVgozNigfy-kZwdL-N2bz";
            if (string.IsNullOrEmpty(secret)) return false;

            var client = new System.Net.WebClient();

            var googleReply = client.DownloadString(
                $"https://www.google.com/recaptcha/api/siteverify?secret={secret}&response={encodedResponse}");

            return JsonConvert.DeserializeObject<RecaptchaResponse>(googleReply).Success;
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SaveContactInformation()
        {
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

                    Task Admintask = new Task(() => Email.Send(AdminMail, bodyAdminTemplate, "Contact us inquiry from " + objContactUsEntity.Name, "", null));
                    Admintask.Start();
                }

                return Request.CreateResponse(HttpStatusCode.OK, "success!");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        public HttpResponseMessage SaveSubscriptionInformation(SubscriptionEntity subscriptiondata)
        {
            try
            {
                var subscriptionid= _unitOfWork.SQLStringReturn("EXEC SaveSubscriptionInformation @Name,@EmailAddress", new SqlParameter[]
                             {
                                new SqlParameter("@Name", subscriptiondata.Name),
                                new SqlParameter("@EmailAddress",subscriptiondata.EmailAddress),
                             });

                if (Convert.ToInt32(subscriptionid) > 0)
                {
                    string AdminMail = System.Configuration.ConfigurationManager.AppSettings["ContactUsEmailId"];
                    string bodyAdminTemplate = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/EmailTemplate/AdminSubscription.html"));
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@FullName]", subscriptiondata.Name);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Email]", subscriptiondata.EmailAddress);

                    Task Admintask = new Task(() => Email.Send(AdminMail, bodyAdminTemplate, "Subscription Request from " + subscriptiondata.Name, "", null));
                    Admintask.Start();
                }

                return Request.CreateResponse(HttpStatusCode.OK, "success!");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
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

                    ProjectTypeEnum prjtype = (ProjectTypeEnum)Enum.Parse(typeof(ProjectTypeEnum), Convert.ToString(objRequestQuoteEntity.ProjectTypeId));
                    BudgetEnum budgettype = (BudgetEnum)Enum.Parse(typeof(BudgetEnum), Convert.ToString(objRequestQuoteEntity.BudgetId));

                    string AdminMail = System.Configuration.ConfigurationManager.AppSettings["ContactUsEmailId"];
                    string bodyAdminTemplate = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/EmailTemplate/AdminRequestQuote.html"));
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@FullName]", objRequestQuoteEntity.FullName);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Email]", objRequestQuoteEntity.EmailAddress);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Mobile]", objRequestQuoteEntity.PhoneNumber);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@company]", objRequestQuoteEntity.Company);
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@ProjectType]", EnumDescription.ToDescription(prjtype));
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@Budget]", EnumDescription.ToDescription(budgettype));
                    bodyAdminTemplate = bodyAdminTemplate.Replace("[@ProjectDescription]", objRequestQuoteEntity.ProjectDescription);

                    Task Admintask = new Task(() => Email.Send(AdminMail, bodyAdminTemplate, "Request Enquiry from " + objRequestQuoteEntity.FullName, "", null));
                    Admintask.Start();
                }

                return Request.CreateResponse(HttpStatusCode.OK, "success!");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error!");
            }
        }

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

        public class DocumentList
        {
            public string FileName { get; set; }
            public string Image { get; set; }
            public string Link { get; set; }
            public bool IsImage { get; set; }
        }

        // for contact us file attachment
        [HttpGet]
        public HttpResponseMessage GetContactInquiryAttachment(int contactid)
        {
            List<DocumentList> listDocs = new List<DocumentList>();

            SqlParameter[] param = new SqlParameter[] { new SqlParameter("@ContactId", contactid) };
            var documentList = _unitOfWork.SQLQuery<string>("EXEC getContactInquiryAttachments @ContactId", param).ToList();

            foreach (string document in documentList)
            {
                DocumentList docs = new DocumentList();
                docs.FileName = document;
                listDocs.Add(docs);
            }


            foreach (DocumentList document in listDocs)
            {
                var path = HttpContext.Current.Server.MapPath("~/ContactUsAttachment/");
                string PathName = string.Empty;
                PathName = Path.Combine(path, document.FileName);

                bool IsFileExists = System.IO.File.Exists(PathName);
                if (IsFileExists)
                {
                    try
                    {
                        using (Image image = Image.FromFile(PathName))
                        {
                            using (MemoryStream m = new MemoryStream())
                            {
                                image.Save(m, image.RawFormat);
                                byte[] imageBytes = m.ToArray();
                                document.Image = Convert.ToBase64String(imageBytes);
                                document.Link = "data:image/gif;base64," + Convert.ToBase64String(imageBytes);
                                document.IsImage = true;
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        path = HttpContext.Current.Server.MapPath("~/Images/downloadicon.png");
                        using (Image image = Image.FromFile(path))
                        {
                            using (MemoryStream m = new MemoryStream())
                            {
                                image.Save(m, image.RawFormat);
                                byte[] imageBytes = m.ToArray();
                                document.Image = Convert.ToBase64String(imageBytes);
                                document.Link = "/GetContactAttachmentFile?FileName=" + document.FileName;
                                document.IsImage = false;
                            }
                        }
                    }
                }
            }

            return Request.CreateResponse(HttpStatusCode.OK, listDocs);
        }

        [HttpGet]
        public HttpResponseMessage GetContactAttachmentFile(string FileName)
        {
            string PathName = HttpContext.Current.Server.MapPath("~/ContactUsAttachment/" + FileName);
            var dataBytes = File.ReadAllBytes(PathName);
            var dataStream = new MemoryStream(dataBytes);

            HttpResponseMessage httpResponseMessage = Request.CreateResponse(HttpStatusCode.OK);
            httpResponseMessage.Content = new StreamContent(dataStream);
            httpResponseMessage.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            httpResponseMessage.Content.Headers.ContentDisposition.FileName = FileName;
            httpResponseMessage.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");

            return httpResponseMessage;
        }

        // for request quote file attachment
        [HttpGet]
        public HttpResponseMessage GetRequestQuoteInquiryAttachment(int requestquoteid)
        {
            List<DocumentList> listDocs = new List<DocumentList>();

            SqlParameter[] param = new SqlParameter[] { new SqlParameter("@RequestQuoteId", requestquoteid) };
            var documentList = _unitOfWork.SQLQuery<string>("EXEC getRequestInquiryAttachments @RequestQuoteId", param).ToList();

            foreach (string document in documentList)
            {
                DocumentList docs = new DocumentList();
                docs.FileName = document;
                listDocs.Add(docs);
            }


            foreach (DocumentList document in listDocs)
            {
                var path = HttpContext.Current.Server.MapPath("~/RequestQuoteAttachment/");
                string PathName = string.Empty;
                PathName = Path.Combine(path, document.FileName);

                bool IsFileExists = System.IO.File.Exists(PathName);
                if (IsFileExists)
                {
                    try
                    {
                        using (Image image = Image.FromFile(PathName))
                        {
                            using (MemoryStream m = new MemoryStream())
                            {
                                image.Save(m, image.RawFormat);
                                byte[] imageBytes = m.ToArray();
                                document.Image = Convert.ToBase64String(imageBytes);
                                document.Link = "data:image/gif;base64," + Convert.ToBase64String(imageBytes);
                                document.IsImage = true;
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        path = HttpContext.Current.Server.MapPath("~/Images/downloadicon.png");
                        using (Image image = Image.FromFile(path))
                        {
                            using (MemoryStream m = new MemoryStream())
                            {
                                image.Save(m, image.RawFormat);
                                byte[] imageBytes = m.ToArray();
                                document.Image = Convert.ToBase64String(imageBytes);
                                document.Link = "/GetRequestQuoteAttachmentFile?FileName=" + document.FileName;
                                document.IsImage = false;
                            }
                        }
                    }
                }
            }

            return Request.CreateResponse(HttpStatusCode.OK, listDocs);
        }

        [HttpGet]
        public HttpResponseMessage GetRequestQuoteAttachmentFile(string FileName)
        {
            string PathName = HttpContext.Current.Server.MapPath("~/RequestQuoteAttachment/" + FileName);
            var dataBytes = File.ReadAllBytes(PathName);
            var dataStream = new MemoryStream(dataBytes);

            HttpResponseMessage httpResponseMessage = Request.CreateResponse(HttpStatusCode.OK);
            httpResponseMessage.Content = new StreamContent(dataStream);
            httpResponseMessage.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            httpResponseMessage.Content.Headers.ContentDisposition.FileName = FileName;
            httpResponseMessage.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");

            return httpResponseMessage;
        }
    }
}
