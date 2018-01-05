using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup("ShaligramInfotechAPI", typeof(ShaligramInfotechAPI.Startup))]

namespace ShaligramInfotechAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
