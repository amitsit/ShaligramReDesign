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
            bundles.Add(new StyleBundle("~/content/css/app").Include(
                "~/content/app.css",
                "~/content/css/bootstrap.min.css",
                "~/content/css/font-awesome.min.css",
                "~/content/css/themify-icons.css",
                "~/content/css/swiper.min.css",
                "~/content/css/header.responsive.min.css",
                "~/content/css/responsive.min.css",
                "~/Content/css/portfolio.css",
                "~/Content/css/pricing_style.css",
                "~/Scripts/js/fancybox/jquery.fancybox.css",
                "~/content/css/custom.min.css",
                "~/content/css/responsive.min.css"
                ));
                
            bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/vendor/jquery-{version}.js"));
        }
    }
}
