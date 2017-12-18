using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;


namespace ShaligramConsultancyAPI.Common
{
    public class EmailHelper
    {
        
        #region Send Mail Method

        public static bool SendMail(string to,string subject, string bodyTemplate, bool isHtml = false)
        {
           
            var userFrom = System.Configuration.ConfigurationManager.AppSettings["UserName"];
            var password = System.Configuration.ConfigurationManager.AppSettings["passsword"];
            var from = System.Configuration.ConfigurationManager.AppSettings["From"];
            int portNumber = Convert.ToInt32(System.Configuration.ConfigurationManager.AppSettings["PortNumber"]);
            string hostName = System.Configuration.ConfigurationManager.AppSettings["HostName"];
            MailMessage mail = new MailMessage();
            string ToEmail = System.Configuration.ConfigurationManager.AppSettings["ToEmail"];
            string CCEmail = System.Configuration.ConfigurationManager.AppSettings["CcEmail"];
            string BCCEmail = System.Configuration.ConfigurationManager.AppSettings["BccEmail"];

            mail.From = new MailAddress(userFrom,from);
            mail.Subject = subject;
            mail.Body = bodyTemplate;
            mail.IsBodyHtml = true;

            if (string.IsNullOrEmpty(to))
            {
                //multiple sending  
                string[] multipleRecepient = ToEmail.Split(',');
                foreach (string recepient in multipleRecepient)
                {
                    mail.To.Add(new MailAddress(recepient));
                }

                //if (!string.IsNullOrEmpty(BCCEmail))
                //{
                //    string[] bccMulti = BCCEmail.Split(',');
                //    foreach (var bccrecepient in bccMulti)
                //    {
                //        mail.Bcc.Add(new MailAddress(bccrecepient.Trim()));
                //    }
                //}

                if (!string.IsNullOrEmpty(CCEmail))
                {
                    string[] ccMulti = CCEmail.Split(',');
                    foreach (var ccrecepient in ccMulti)
                    {
                        mail.CC.Add(new MailAddress(ccrecepient.Trim()));
                    }

                }
            }
            else
            {
                mail.To.Add(to);
            }
            
            SmtpClient smtp = new SmtpClient();
            smtp.Host = hostName;
            smtp.Port = portNumber;

            smtp.UseDefaultCredentials = true;
            smtp.EnableSsl = true;

            smtp.Credentials = new System.Net.NetworkCredential(userFrom, password);// Enter seders User name and password
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            try
            {
                smtp.Send(mail);
            }
            catch (Exception EX)
            {

                return false;
            }

            return true;
        }

        public static void SendAsyncEmail(string to , string subject, string body, bool isHtml = false)
        {
            Task task = new Task(() => SendMail(to ,subject, body, isHtml));
            task.Start();
        }

        
        #endregion
    }
}


