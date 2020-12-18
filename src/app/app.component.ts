import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  display: boolean;
  constructor() {}

  ngOnInit() {
    const webURL = window.location.href;
    this.display = !webURL.includes('landing') && !webURL.includes('login');
    AOS.init();
  }
}
