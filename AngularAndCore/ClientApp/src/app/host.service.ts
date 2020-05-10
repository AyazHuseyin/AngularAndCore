import { Injectable } from '@angular/core';

import { AboutComponent } from './about/about.component'; 
import { ContactComponent } from './contact/contact.component'; 
import { HostItem } from './host-item.component';
import { DefaultComponent } from './default/default.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';
import { UseraddComponent } from './useradd/useradd.component';

@Injectable()
export class HostService {
  getAds() {
    return [

      new HostItem(AboutComponent, {}),
      new HostItem(ContactComponent, {}),
      new HostItem(DefaultComponent, {}),
      new HostItem(ErrorComponent, {}),
      new HostItem(UsersComponent, {}),
      new HostItem(UseraddComponent, {}),
      
    ];
  }
}
