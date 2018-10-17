using moviesite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace moviesite.Controllers
{
    public class ValuesController : ApiController
    {
        List<MovieModel> Moivedetails = new List<MovieModel>()
        {
            new MovieModel {ID=1,MovieName ="Rocky",Movieyear = "1976",ActorsName="Sylvester Stallone",DiretorsName="John G. Avildsen",WritersName ="Sylvester Stallone",MovieBudget ="",ActressName ="Talia Shire",MovieProducer ="960000",MovieProfit ="225000000" }

        };
        // GET api/<controller>
        [HttpGet]
        public IEnumerable<MovieModel> Get()
        {
            return Moivedetails;
            //return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}