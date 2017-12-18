using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using ShaligramConsultancyAPI.Common;
using ShaligramConsultancyAPI.Models;

namespace ShaligramConsultancyAPI.Controllers
{
    public class CommonApiController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage SaveInformation(InquiryDetail allDataobj)
        {
            ShaligramConsultancyEntities objEntities = new ShaligramConsultancyEntities();
            InquiryDetail objinqiry = new InquiryDetail();
            objinqiry.Name = allDataobj.Name;
            objinqiry.Email = allDataobj.Email;
            objinqiry.Phone = allDataobj.Phone;
            objinqiry.EMI = allDataobj.EMI;
            objinqiry.Rupees = allDataobj.Rupees;
            objinqiry.InquiryFor = allDataobj.InquiryFor;
            objinqiry.CreatedDate = DateTime.Now;
            objEntities.InquiryDetails.Add(objinqiry);
            objEntities.SaveChanges();


            //Image Path 
            var imagepath = System.Configuration.ConfigurationManager.AppSettings["tempLogo"];
            //owner mail
            var mappedPath = HttpContext.Current.Server.MapPath("~/EmailTemplate/EmailTemplate.html");

            string bodyTemplate = System.IO.File.ReadAllText(mappedPath);
            //string ToEmail = "richa.t@shaligraminfotech.com,amit.p@shaligraminfotech.com";
            bodyTemplate = bodyTemplate.Replace("[@Name]", allDataobj.Name);
            bodyTemplate = bodyTemplate.Replace("[@Email]", allDataobj.Email);
            bodyTemplate = bodyTemplate.Replace("[@Phone]", allDataobj.Phone);
            bodyTemplate = bodyTemplate.Replace("[@EnquiryFor]", allDataobj.InquiryFor);
            bodyTemplate = bodyTemplate.Replace("[@Path]", imagepath);
            EmailHelper.SendAsyncEmail("", "[Shaligram Consultancy] Receive New Enquiry For - " + allDataobj.InquiryFor ,bodyTemplate,true);

            //thank u email
            var mappedPathThankU = HttpContext.Current.Server.MapPath("~/EmailTemplate/ThankuEmail.html");
            string bodyTemplateThankYou = System.IO.File.ReadAllText(mappedPathThankU);
            
            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Name]", allDataobj.Name);
            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@EnquiryFor]", allDataobj.InquiryFor);
            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Email]", allDataobj.Email);
            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Phone]", allDataobj.Phone);
            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Path]", imagepath);
            EmailHelper.SendAsyncEmail(allDataobj.Email, "Thank You For Your Inquiry With Shaligram Consultancy.", bodyTemplateThankYou, true);



            return Request.CreateResponse(HttpStatusCode.OK, true);

        }

        [HttpPost]
        public HttpResponseMessage SaveContactUSInformation(ContactUsEnquiry allDataobj)
        {
            ShaligramConsultancyEntities objEntities = new ShaligramConsultancyEntities();
            if (allDataobj != null)
            {
                objEntities.ContactUsEnquiries.Add(allDataobj);
                objEntities.SaveChanges();
            }



            //Image Path 
            var imagepath = System.Configuration.ConfigurationManager.AppSettings["tempLogo"];
            //owner mail
            var mappedPath = HttpContext.Current.Server.MapPath("~/EmailTemplate/contactUsEmail.html");

            string bodyTemplate = System.IO.File.ReadAllText(mappedPath);
            //string ToEmail = "richa.t@shaligraminfotech.com,amit.p@shaligraminfotech.com";
            bodyTemplate = bodyTemplate.Replace("[@Name]", allDataobj.Name);
            bodyTemplate = bodyTemplate.Replace("[@Email]", allDataobj.Email);
            bodyTemplate = bodyTemplate.Replace("[@Phone]", allDataobj.Phone);
            bodyTemplate = bodyTemplate.Replace("[@City]", allDataobj.City);
            bodyTemplate = bodyTemplate.Replace("[@Path]", imagepath);
            EmailHelper.SendAsyncEmail("", "[Shaligram Consultancy] Receive New Contact Us Request" , bodyTemplate, true);

            //thank u email
            var mappedPathThankU = HttpContext.Current.Server.MapPath("~/EmailTemplate/contactUsThankuEmail.html");
            string bodyTemplateThankYou = System.IO.File.ReadAllText(mappedPathThankU);

            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Name]", allDataobj.Name);
            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@City]", allDataobj.City);
            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Email]", allDataobj.Email);
            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Phone]", allDataobj.Phone);
            bodyTemplateThankYou = bodyTemplateThankYou.Replace("[@Path]", imagepath);
            EmailHelper.SendAsyncEmail(allDataobj.Email, "Thank You For Your Contact Request With Shaligram Consultancy.", bodyTemplateThankYou, true);



            return Request.CreateResponse(HttpStatusCode.OK, true);

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
