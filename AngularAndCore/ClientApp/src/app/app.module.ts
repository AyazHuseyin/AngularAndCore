import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HostDirective } from './host.directive';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { HostService } from './host.service';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';
import { UseraddComponent } from './useradd/useradd.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HostDirective,
    AboutComponent,
    ContactComponent,
    DefaultComponent,
    ErrorComponent,
    UsersComponent,
    UseraddComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [HostService],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent, ContactComponent, DefaultComponent, ErrorComponent, UsersComponent, UseraddComponent],
})
export class AppModule { }
