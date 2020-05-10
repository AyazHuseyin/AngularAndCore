import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class HostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
