using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAndCore.Models
{
    public class tMenu
    {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public string MenuName { get; set; }
        public string MenuCode { get; set; }
        public string Url { get; set; }
        public bool Lock { get; set; }
    }
}
