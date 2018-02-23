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
    public class BlogPostApiController : ApiController
    {
        private readonly UnitOfWork _unitOfWork = null;

        public BlogPostApiController()
        {
            _unitOfWork = new UnitOfWork();
            //_CandidateService = new CandidateService();
        }

        [HttpGet]
        public HttpResponseMessage GetAllCategory()
        {
            var list = _unitOfWork.SQLQuery<BlogPostCategoryEntity>("EXEC getBlogPostCategory").ToList();
            return Request.CreateResponse(HttpStatusCode.OK, list);
        }

        [HttpGet]
        public HttpResponseMessage GetRecentBlogPost()
        {
            var list = _unitOfWork.SQLQuery<BlogPostEntity>("EXEC getRecentBlogPost").ToList();
            return Request.CreateResponse(HttpStatusCode.OK, list);
        }

        [HttpGet]
        public HttpResponseMessage GetAllBlogPostByCategory(int? CategoryId, int? pageSize)
        {
            try
            {
                SqlParameter[] param = new SqlParameter[] {
                new SqlParameter("@BlogPostCategoryId",(object)CategoryId??DBNull.Value),
                new SqlParameter("@pageSize",(object)pageSize??DBNull.Value)
                };


                var list = _unitOfWork.SQLQuery<BlogPostEntity>("EXEC getBlogPost @BlogPostCategoryId, @pageSize", param).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, list);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }



    }
}
