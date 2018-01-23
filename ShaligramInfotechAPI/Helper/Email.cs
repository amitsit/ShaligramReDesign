using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace ShaligramInfotechAPI.Helper
{
    public class Email
    {
        public static bool Send(string mailTo, string bodyTemplate, string subject = "", string ccMail = "", List<string> filePath = null)
        {
            var email = System.Configuration.ConfigurationManager.AppSettings["Email"];
            var password = System.Configuration.ConfigurationManager.AppSettings["passsword"];
            int PortNumber = Convert.ToInt32(System.Configuration.ConfigurationManager.AppSettings["PortNumber"]);
            string HostName = System.Configuration.ConfigurationManager.AppSettings["HostName"];
            MailMessage mail = new MailMessage();

            foreach (var address in mailTo.Split(new[] { ";" }, StringSplitOptions.RemoveEmptyEntries))
            {
                mail.To.Add(address);
            }
            mail.From = new MailAddress(email);
            mail.Subject = subject;
            mail.Body = bodyTemplate;

            if (filePath != null)
            {
                if (filePath.Count > 0)
                {
                    for (int i = 0; i < filePath.Count; i++)
                    {
                        mail.Attachments.Add(new Attachment(filePath[i]));
                    }
                }
            }
            mail.IsBodyHtml = true;

            if (ccMail != "" && ccMail != null)
            {
                mail.CC.Add(ccMail);
            }

            SmtpClient smtp = new SmtpClient();
            //smtp.Host = "smtp.gmail.com";
            smtp.Host = HostName;

            //smtp.Port = 587;
            smtp.Port = PortNumber;

            smtp.UseDefaultCredentials = false;
            smtp.EnableSsl = false;

            smtp.Credentials = new System.Net.NetworkCredential(email, password);// Enter seders User name and password
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

            // smtp.EnableSsl = true;
            try
            {
                smtp.Send(mail);
            }
            catch (Exception)
            {

                throw;
            }

            return true;
        }

    }
}