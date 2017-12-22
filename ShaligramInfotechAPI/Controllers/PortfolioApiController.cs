using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using ShaligramInfotechAPI.Entities;

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

                //SqlParameter[] param = new SqlParameter[]
                //{
                //    new SqlParameter("@title",Title)
                //};
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
                }
            }

            return Request.CreateResponse(HttpStatusCode.OK, objPortfolioListFrontModel);
        }
    }
}
