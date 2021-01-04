import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  display: boolean;
  nonNavbarUrls = ['/', '/landing', 'login', '/login', 'landing'];
  constructor() {}

  ngOnInit() {
    const webURL = window.location.pathname;
    this.display = !this.nonNavbarUrls.includes(webURL);
    AOS.init();
  }
}
