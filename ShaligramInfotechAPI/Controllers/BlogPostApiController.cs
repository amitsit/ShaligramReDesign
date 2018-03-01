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

        //[HttpGet]
        //public HttpResponseMessage GetAllBlogPostByCategory(int? CategoryId, int? pageSize)
        //{
        //    try
        //    {
        //        SqlParameter[] param = new SqlParameter[] {
        //        new SqlParameter("@BlogPostCategoryId",(object)CategoryId??DBNull.Value),
        //        new SqlParameter("@pageSize",(object)pageSize??DBNull.Value)
        //        };


        //        var list = _unitOfWork.SQLQuery<BlogPostEntity>("EXEC getBlogPost @BlogPostCategoryId, @pageSize", param).ToList();
        //        return Request.CreateResponse(HttpStatusCode.OK, list);
        //    }
        //    catch (Exception ex)
        //    {
        //        return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
        //    }
        //}

        [HttpGet]
        public HttpResponseMessage GetAllBlogPostByCategory(int? CategoryId, int? pageFrom, int? pageSize)
        {
            try
            {
                SqlParameter[] param = new SqlParameter[] {
                    new SqlParameter("@BlogPostCategoryId",(object)CategoryId??DBNull.Value),
                    new SqlParameter("@PageFrom",(object)pageFrom??DBNull.Value),
                    new SqlParameter("@PageSize",(object)pageSize??DBNull.Value)
                };

                var list = _unitOfWork.SQLQuery<BlogPostEntity>("EXEC getBlogPostWithPaging @BlogPostCategoryId, @PageFrom, @PageSize", param).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, list);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpGet]
        public HttpResponseMessage GetAllBlogPostByTitle(string title)
        {
            try
            {
                SqlParameter[] param = new SqlParameter[] {
                new SqlParameter("@Title",title),
                };


                var list = _unitOfWork.SQLQuery<BlogPostEntity>("EXEC getBlogPostByTitle @Title", param).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, list);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SaveBlogPostImage()
        {
            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                {
                    throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
                }

                var root = HttpContext.Current.Server.MapPath("~/");
                string path = System.Configuration.ConfigurationManager.AppSettings["BlogPostImagePath"];

                Directory.CreateDirectory(root);
                var provider = new MultipartFormDataStreamProvider(root);
                var result = await Request.Content.ReadAsMultipartAsync(provider);


                HttpFileCollection uploadedFiles = HttpContext.Current.Request.Files;
                for (int i = 0; i < uploadedFiles.Count; i++)
                {
                    HttpPostedFile file = uploadedFiles[i];
                    if (file.ContentLength > 0)
                    {
                        string fileName = file.FileName;
                        file.SaveAs(path + "\\" + fileName);
                    }
                }

                return Request.CreateResponse(HttpStatusCode.OK, "success!");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message.ToString());
            }
        }

        [HttpGet]
        public HttpResponseMessage GetBlogPostFileByName(string FileName)
        {
            try
            {
                string path = System.Configuration.ConfigurationManager.AppSettings["BlogPostImagePath"] + FileName;

                Byte[] bytes = File.ReadAllBytes(path);
                String file = Convert.ToBase64String(bytes);

                return Request.CreateResponse(HttpStatusCode.OK, file);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error!");
            }
        }

    }
}
