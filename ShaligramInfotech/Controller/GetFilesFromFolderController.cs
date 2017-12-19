using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace App.ShaligramInfotech.Controller
{
    public class GetFilesFromFolderController : System.Web.Mvc.Controller
    {
        [HttpGet]
        public ActionResult GetFiles(string folderPath = "Test")
        {
            if (!string.IsNullOrWhiteSpace(folderPath) && System.IO.Directory.Exists(folderPath))
            {
                string[] fileList = System.IO.Directory.GetFiles(folderPath);
                return Json(fileList, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(null, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Test()
        {
            return Content("Test");
        }
    }
}