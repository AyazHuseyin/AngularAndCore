import { Type } from '@angular/core';

export class HostItem {
  constructor(public component: Type<any>, public data: any) { }
}
