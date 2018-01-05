using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShaligramInfotechAPI.Entities
{
    public class ContactUsEntity
    {
        public int ContactUsId { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string City { get; set; }
        public string Company { get; set; }
        public string Message { get; set; }
    }
}