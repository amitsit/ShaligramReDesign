// --------------------------------------------------------------------------------------------------------------------
// <copyright file="RouteConfig.cs" company="Microsoft">
//   Copyright © 2017 Microsoft
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.ShaligramInfotech
{
    using System.Web.Routing;

    using App.ShaligramInfotech.Routing;
    using System.Web.Mvc;

    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.Add("Default", new DefaultRoute());

        //    routes.MapRoute(
        //    name: "Default",
        //    url: "{controller}/{action}/{id}",
        //    defaults: new { controller = "GetFilesFromFolder", action = "Test", id = UrlParameter.Optional }
        //);
            //     routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            

            //     routes.MapRoute(
            //    name: "Default1",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "GetFilesFromFolder", action = "GetFiles", id = UrlParameter.Optional }
            //);
        }
    }
}
