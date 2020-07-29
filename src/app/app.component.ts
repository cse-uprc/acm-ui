import { Component, OnInit } from '@angular/core';
import { MathService } from 'acmkit/dist/acmkit-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'acm-ui';
  testValue = 0;

  constructor(private numberAdderService: MathService) {}

  ngOnInit() {
    this.testValue = this.numberAdderService.addThreeNumbers(3, 4, 8);
  }
}
