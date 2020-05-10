import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent {

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
   
  }
}

