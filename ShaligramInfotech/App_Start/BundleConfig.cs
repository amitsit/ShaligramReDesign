// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="Microsoft">
//   Copyright © 2017 Microsoft
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.ShaligramInfotech
{
    using System.Web;
    using System.Web.Optimization;

    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/content/css/app").Include("~/content/app.css",
                "~/content/css/bootstrap.min.css",
                "~/content/css/custom.min.css",
                "~/content/css/font-awesome.min.css",
                //"~/content/css/header.custom.min.css",
                "~/content/css/header.responsive.min.css",
                "~/content/css/responsive.min.css",
                //"~/Content/css/portfoliot.css",
                "~/Content/css/portfolio.css",
                "~/Content/css/pricing_style.css"
                ));
                
            bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/vendor/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/js/app").Include(
            //      "~/scripts/js/jquery.min.js",
            //    "~/scripts/vendor/angular-ui-router.js",
            //    "~/scripts/filters.js",
            //    "~/scripts/services.js",
            //    "~/scripts/directives.js",
            //    "~/scripts/controllers.js",
            //    "~/scripts/app.js",
            //     "~/scripts/js/bootstrap.min.js",
            //    "~/scripts/js/Priceformscript.js",
            //       "~/scripts/js/sticky-kit.min.js"
            //       ));
        }
    }
}
