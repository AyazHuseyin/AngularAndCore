using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using AngularAndCore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularAndCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        private readonly ApplicationContext db;
        public ApiController(ApplicationContext context)
        {
            db = context;
            db.Database.EnsureCreated();
        }
        [HttpGet]
        public IEnumerable<MenuViewModel> Get()
        {
            
            return GetMenus();

        }
        private List<MenuViewModel> GetMenus()
        {

            var parentIds = db.NavbarMenus.Where(x => x.Lock == true).Select(x=>x.ParentId).Distinct();
            var tmenu = db.NavbarMenus.Where(x => x.Lock == true).ToList();
            var sidebarMenu = new List<MenuViewModel>();
            foreach (var item in parentIds)
            {
                if (item == 0)
                {
                    sidebarMenu.AddRange(db.NavbarMenus.Where(x => x.Lock == true && x.ParentId == item).Select(x =>
                    new MenuViewModel
                    {
                        Id = x.Id,
                        Lock = x.Lock,
                        ParentId = x.ParentId,
                        MenuCode = x.MenuCode,
                        MenuName = x.MenuName,
                        Url = x.Url,
                    }).ToArray());
                }
                else
                {
                    sidebarMenu.FirstOrDefault(x=>x.Id == item).ChildMenus = db.NavbarMenus.Where(x => x.Lock == true && x.ParentId == item).Select(x =>
                   new MenuViewModel
                   {
                       Id = x.Id,
                       Lock = x.Lock,
                       ParentId = x.ParentId,
                       MenuCode = x.MenuCode,
                       MenuName = x.MenuName,
                       Url = x.Url
                   }).ToArray();
                }

            }
            return sidebarMenu;
        }
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Api
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Api/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
