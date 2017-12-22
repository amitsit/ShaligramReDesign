﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShaligramInfotechAPI.Entities
{
    public class PortfolioListFrontModel
    {
        public int PortfolioId { get; set; }
        public string Title { get; set; }
        public string FrontPageImageURL { get; set; }
        public string BannerImageURL { get; set; }
        public int TechnologyId { get; set; }
        public string TitleSeoUrl { get; set; }
        public List<PortfolioFeatureEntity> objPortfolioFeatureEntity { get; set; }
        public List<PortfolioImageEntity> objPortfolioImageEntity { get; set; }
        public List<PortfolioObjectiveEntity> objPortfolioObjectiveEntity { get; set; }
        public List<PortfolioResultEntity> objPortfolioResultEntity { get; set; }
        public List<PortfolioTechnologyEntity> objPortfolioTechnologyEntity { get; set; }
        public List<PortfolioSolutionEntity> objPortfolioSolutionEntity { get; set; }
    }

  
}