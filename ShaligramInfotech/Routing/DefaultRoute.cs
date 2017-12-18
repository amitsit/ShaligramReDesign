// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DefaultRoute.cs" company="Microsoft">
//   Copyright © 2017 Microsoft
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.ShaligramInfotech.Routing
{
    using System.Web.Routing;

    public class DefaultRoute : Route
    {
        public DefaultRoute()
            : base("{*path}", new DefaultRouteHandler())
        {
            this.RouteExistingFiles = false;
        }
    }
}
