using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAndCore.Models
{
    public class MenuViewModel
    {
        public MenuViewModel()
        {
            this.ChildMenus = new List<MenuViewModel>();
        }
        public int Id { get; set; }
        public int ParentId { get; set; }
        public string MenuName { get; set; }
        public string MenuCode { get; set; }
        public string Url { get; set; }
        public bool Lock { get; set; }
        public IEnumerable<MenuViewModel> ChildMenus { get; set; }
    }
}
