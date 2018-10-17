using Microsoft.AspNet.Identity.EntityFramework;
using moviesite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Web;
using System.Web.Mvc;

namespace moviesite.Controllers
{
    public class HomeController : Controller
    {
       
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Quiz()
        {
            ValuesController val = new ValuesController();

            var t = val.Get() ;
           
            

            if (User.Identity.Name == "")
            {
                return RedirectToAction("Account", "Login");
            }
           //else if()

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}