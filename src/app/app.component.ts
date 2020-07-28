import { Component, OnInit } from '@angular/core';
import { NumberAdderService } from 'acmkit/dist/acmkit-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'acm-ui';
  testValue = 0;

  constructor(private numberAdderService: NumberAdderService) {}

  ngOnInit() {
    this.testValue = this.numberAdderService.addNumbers(3, 4);
  }
}
