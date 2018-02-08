using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShaligramInfotechAPI.Entities
{
    public class PortfolioImageEntity
    {
        public int ImageId { get; set; }
        public int PortfolioId { get; set; }
        public string ImageURL { get; set; }
        public string SEOTitleTag { get; set; }
    }
}