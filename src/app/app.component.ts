import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'acm-ui';
  testValue = 0;

  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
