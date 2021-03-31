import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Survey Questions', url: '/survey', icon: 'clipboard' },
    { title: 'About', url: '/about', icon: 'qr-code' },
  ];
  constructor() {}
}
