using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace moviesite.Models
{
    public class MovieModel
    {
        public int ID { get; set; }
        public string MovieName { get; set; }

        public string Movieyear { get; set; }

        public string ActorsName { get; set; }

        public string DiretorsName { get; set; }

        public string WritersName { get; set; }

        public string MovieBudget { get; set; }

        public string ActressName { get; set; }

        public string MovieProducer { get; set; }

        public string MovieProfit { get; set; }
    }
}