using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAndCore.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
               : base(options)
        {
        }
        public DbSet<tMenu> NavbarMenus { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var menus = CreateSideBarMenuInCahce();

            foreach (var item in menus)
            {
                modelBuilder.Entity<tMenu>().HasData(
                  new tMenu
                  {
                      Id = item.Id,
                      ParentId = item.ParentId,
                      Lock = item.Lock,
                      MenuCode = item.MenuCode,
                      MenuName = item.MenuName,
                      Url = item.Url
                  });
            }
        }

        private IEnumerable<tMenu> CreateSideBarMenuInCahce()
        {
            string jsonString = System.IO.File.ReadAllText(@"..\AngularAndCore\JsonFile\SidebarMenu.json");
            return Newtonsoft.Json.JsonConvert.DeserializeObject<List<tMenu>>(jsonString);
        }
    }
}
