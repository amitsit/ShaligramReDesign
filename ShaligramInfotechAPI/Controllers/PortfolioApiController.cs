using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using ShaligramInfotechAPI.Entities;
using System.Collections.Specialized;
using System.Threading.Tasks;
using System.Web;
using System.IO;

namespace ShaligramInfotechAPI.Controllers
{
    public class PortfolioApiController : ApiController
    {
        private readonly UnitOfWork _unitOfWork = null;

        public PortfolioApiController()
        {
            _unitOfWork = new UnitOfWork();
            //_CandidateService = new CandidateService();
        }

        [HttpGet]
        public HttpResponseMessage GetAllTechnologies()
        {
            var list = _unitOfWork.SQLQuery<TechnologyEntity>("EXEC GetAllTechnologies").ToList();
            return Request.CreateResponse(HttpStatusCode.OK, list);
        }

        [HttpGet]
        public HttpResponseMessage GetPortfolioListForFront(int technologyId)
        {
            SqlParameter[] param = new SqlParameter[]
            {
                new SqlParameter("@technologyId",technologyId)
            };
            var list = _unitOfWork.SQLQuery<PortfolioListFrontModel>("EXEC GetPortfolioListAtFront @technologyId", param).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, list);
        }

        [HttpGet]
        public HttpResponseMessage GetParticularPortfolioDetail(string Title)
        {
            PortfolioListFrontModel objPortfolioListFrontModel = new PortfolioListFrontModel();
            if (Title != null && Title != "")
            {
                objPortfolioListFrontModel = _unitOfWork.SQLQuery<PortfolioListFrontModel>("EXEC [GetParticularPortfolioDetail] @title", new SqlParameter[]
                {
                    new SqlParameter("@title",Title)
                }).SingleOrDefault();

                if (objPortfolioListFrontModel != null)
                {
                    var feature = _unitOfWork.SQLQuery<PortfolioFeatureEntity>("EXEC GetParticularPortfolioFeatureDetail @title", new SqlParameter[]
                    {
                        new SqlParameter("@title",Title)
                    }).ToList();

                    objPortfolioListFrontModel.objPortfolioFeatureEntity = feature;

                    var imagedata = _unitOfWork.SQLQuery<PortfolioImageEntity>("EXEC GetParticularPortfolioImageDetail @title", new SqlParameter[]
                    {
                        new SqlParameter("@title",Title)
                    }).ToList();

                    objPortfolioListFrontModel.objPortfolioImageEntity = imagedata;

                    var objectives = _unitOfWork.SQLQuery<PortfolioObjectiveEntity>("EXEC GetParticularPortfolioObjectiveDetail @title", new SqlParameter[]
                    {
                        new SqlParameter("@title",Title)
                    }).ToList();

                    objPortfolioListFrontModel.objPortfolioObjectiveEntity = objectives;

                    var resultdata = _unitOfWork.SQLQuery<PortfolioResultEntity>("EXEC GetParticularPortfolioResultDetail @title", new SqlParameter[]
                    {
                        new SqlParameter("@title",Title)
                    }).ToList();

                    objPortfolioListFrontModel.objPortfolioResultEntity = resultdata;

                    var solutions = _unitOfWork.SQLQuery<PortfolioSolutionEntity>("EXEC GetParticularPortfolioSolutionDetail @title", new SqlParameter[]
                    {
                        new SqlParameter("@title",Title)
                    }).ToList();

                    objPortfolioListFrontModel.objPortfolioSolutionEntity = solutions;

                    var technology = _unitOfWork.SQLQuery<PortfolioTechnologyEntity>("EXEC GetParticularPortfolioTechnologyDetail @title", new SqlParameter[]
                    {
                        new SqlParameter("@title",Title)
                    }).ToList();

                    objPortfolioListFrontModel.objPortfolioTechnologyEntity = technology;

                    var challengeFaced = _unitOfWork.SQLQuery<ChallengeFacedModel>("EXEC GetChallengeFacedDetail @title", new SqlParameter[]
                    {
                            new SqlParameter("@title",Title)
                    }).ToList();

                    objPortfolioListFrontModel.objChallengeFaced = challengeFaced;

                    var portfolioLogo = _unitOfWork.SQLQuery<PortfolioLogo>("EXEC GetParticularPortfolioLogoImageDetail @title", new SqlParameter[]
                    {
                            new SqlParameter("@title",Title)
                    }).ToList();

                    objPortfolioListFrontModel.objPortfolioLogo = portfolioLogo;
                }
            }

            return Request.CreateResponse(HttpStatusCode.OK, objPortfolioListFrontModel);
        }

        //[HttpPost]
        //public HttpResponseMessage saveHtmlFile()
        //{
        //    try
        //    {
        //        string filename = Convert.ToString(HttpContext.Current.Request.Form["filename"]);
        //        string htmldata = Convert.ToString(HttpContext.Current.Request.Form["htmldata"]);

        //        var root = HttpContext.Current.Server.MapPath("~/PortfolioPages").Replace("API","");
        //        Directory.CreateDirectory(root);

        //        using (StreamWriter _testData = new StreamWriter(root + "/" + filename + ".html", false))
        //        {
        //            _testData.WriteLine(htmldata); // Write the file.
        //        }
        //    }
        //    catch (Exception ex)
        //    {

        //    }

        //    return Request.CreateResponse(HttpStatusCode.OK, "Html file created");
        //}
    }
}
