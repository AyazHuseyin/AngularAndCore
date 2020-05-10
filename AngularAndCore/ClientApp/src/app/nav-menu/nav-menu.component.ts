import { Component, Inject, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { HostService } from '../host.service';
import { HostItem } from '../host-item.component';

import { HostDirective } from '../host.directive';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [HomeComponent],
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;

  private _toggleSidebar(id) {
    if (document.getElementById(id).classList.contains("collapse")) {
      document.getElementById(id).classList.remove("collapse");
    } else {
      document.getElementById(id).classList.add("collapse");
    }
  }
  componentProp = "DefaultComponent";
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  sidebarMenus = null;

  constructor(http: HttpClient, @Inject('BASE_URL') baseurl: string, private hmcomp: HomeComponent, private adService: HostService, private componentFactoryResolver: ComponentFactoryResolver) {
    http.get<MenuViewModel[]>(baseurl + "api/Api").subscribe(result => {
      this.sidebarMenus = result
    }, error => console.error(error));
  }
  
  ads: HostItem[];
  @ViewChild(HostDirective, { static: true }) adHost: HostDirective;

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  public _callChildComponent(url) {
    this.componentProp = url;
  }


}


interface MenuViewModel {
  Id: number,
  ParentId: number,
  MenuName: string,
  MenuCode: string,
  Url: string,
  Lock: boolean,
  ChildMenus: MenuViewModel[]
}
