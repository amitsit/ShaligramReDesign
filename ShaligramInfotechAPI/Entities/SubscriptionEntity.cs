using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShaligramInfotechAPI.Entities
{
    public class SubscriptionEntity
    {
        public int SubscriptionId { get; set; }
        public string Name { get; set; }
        public string EmailAddress { get; set; }
    }
}