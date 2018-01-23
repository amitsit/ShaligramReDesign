using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShaligramInfotechAPI.Entities
{
	public class RequestQuoteEntity
	{
		public int RequestQuoteId { get; set; }
		public string FullName { get; set; }
		public string PhoneNumber { get; set; }
		public string EmailAddress { get; set; }
		public string City { get; set; }
		public string Company { get; set; }
		public int ProjectTypeId { get; set; }
		public int BudgetId { get; set; }
		public string ProjectDescription { get; set; }
    }
}