import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnChanges } from '@angular/core';

import { HostDirective } from '../host.directive';
import { HostItem } from '../host-item.component';
import { HostComponent } from '../host.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() ads: HostItem[];
  @Input() componentProp: string;
  @ViewChild(HostDirective, { static: true }) adHost: HostDirective
  interval: any;
  sidebarMenus = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent(url) {
    const adItem = this.selecetComp(url);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<HostComponent>componentRef.instance).data = adItem.data;
  }

  ngOnChanges(changes) {
    if (changes.componentProp != null) {
      this.loadComponent(changes.componentProp.currentValue);
    }
  }

  private selecetComp(url) {
    if (this.ads.find(x => x.component.name == url) != null) {
      return this.ads.find(x => x.component.name == url);
    } else {
      return this.ads.find(x => x.component.name == "ErrorComponent");
    }
  }
}


