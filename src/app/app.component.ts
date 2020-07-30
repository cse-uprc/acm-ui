import { Component, OnInit } from '@angular/core';
import { MathService } from 'acmkit/dist/acmkit-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // Declare variables to be used in HTML template here
  title: string;
  testValue: number;

  constructor(private numberAdderService: MathService) {
    // Initialize variables to be used in HTML template here
    this.title = 'UPRC ACM Student Chapter';
    this.testValue = 0;
  }

  ngOnInit() {
    this.numberAdderService.testMethod();
    this.testValue = this.numberAdderService.addThreeNumbers(3, 4, 8);
  }
}
