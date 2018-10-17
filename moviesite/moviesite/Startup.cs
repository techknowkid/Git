using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(moviesite.Startup))]
namespace moviesite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
