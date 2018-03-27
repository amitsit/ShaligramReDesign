// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DefaultRouteHandler.cs" company="Microsoft">
//   Copyright © 2017 Microsoft
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.ShaligramInfotech.Routing
{
    using System;
    using System.Web;
    using System.Web.Routing;
    using System.Web.WebPages;

    public class DefaultRouteHandler : IRouteHandler
    {
        public IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            var filePath = requestContext.HttpContext.Request.AppRelativeCurrentExecutionFilePath;

            if (filePath == "~/")
            {
                filePath = "~/views/SCPages/SCIndex.cshtml";
            }
            else
            {
                if (!filePath.StartsWith("~/views/SCPages/", StringComparison.OrdinalIgnoreCase))
                {
                    if (filePath.StartsWith("~/portfolio-detail/ShaligramInfotechAPI/api/PortfolioApi/", StringComparison.OrdinalIgnoreCase))
                    {
                        filePath = filePath.Replace("portfolio-detail/", "");
                    }
                    else
                    {
                        if (filePath.StartsWith("~/portfolio-detail", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/GetParticularPortfolioDetail";
                        }
                        else if (filePath.Equals("~/subscribe", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/Subscription";
                        }
                        else if (filePath.Equals("~/portfolio", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/portfolio-index";
                        }
                        else if (filePath.Equals("~/portfolio/true", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/portfolio-index";
                        }
                        else if (filePath.StartsWith("~/blog", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/BlogPost";
                        }
                        else if (filePath.Equals("~/pricing-comparison-uk", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/pricecomparisonuk";
                        }
                        else if (filePath.Equals("~/pricing-comparison-aus", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/pricecomparisonaus";
                        }
                        else if (filePath.Equals("~/pricing-comparison-us", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/SCPages/pricecomparisonus";
                        }
                        else
                        {
                            filePath = filePath.Insert(2, "views/SCPages/");
                        }
                    }

                }

                if (!filePath.EndsWith(".cshtml", StringComparison.OrdinalIgnoreCase))
                {
                    filePath = filePath += ".cshtml";
                }
            }

            var handler = WebPageHttpHandler.CreateFromVirtualPath(filePath); // returns NULL if .cshtml file wasn't found

            if (handler == null)
            {
                requestContext.RouteData.DataTokens.Add("templateUrl", "/views/404");
                handler = WebPageHttpHandler.CreateFromVirtualPath("~/views/404.cshtml");
            }
            else
            {
                requestContext.RouteData.DataTokens.Add("templateUrl", filePath.Substring(1, filePath.Length - 8));
            }

            return handler;
        }
    }
}
