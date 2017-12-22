using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShaligramInfotechAPI.Entities
{
    public class PortfolioSolutionEntity
    {
        public int SolutionId { get; set; }
        public string SolutionText { get; set; }
        public int PortfolioId { get; set; }
    }
}