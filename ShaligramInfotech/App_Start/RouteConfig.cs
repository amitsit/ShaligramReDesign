// --------------------------------------------------------------------------------------------------------------------
// <copyright file="RouteConfig.cs" company="Microsoft">
//   Copyright © 2017 Microsoft
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.ShaligramInfotech
{
    using System.Web.Routing;

    using App.ShaligramInfotech.Routing;

    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.Add("Default", new DefaultRoute());
        }
    }
}
