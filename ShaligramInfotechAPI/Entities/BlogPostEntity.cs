using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShaligramInfotechAPI.Entities
{
    public class BlogPostEntity
    {
        public int PostId { get; set; }
        public int? UserId { get; set; }
        public string UserName { get; set; }
        public int? CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string PostImagePath { get; set; }
        public string AltTag { get; set; }
        public string PostTitle { get; set; }
        public string PostPageTitle { get; set; }
        public string PostContent { get; set; }
        public DateTime? PostDate { get; set; }
        public string PostURL { get; set; }
        public bool? IsActive { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDesc { get; set; }
        public int? ViewCount { get; set; }
        public int? TotalRecords { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}