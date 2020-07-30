import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Declare component variables
  isCollapsed: boolean;
  title: string;

  constructor() {

    // Use Bootstrap 4
    setTheme('bs4');
    
    // Set values for variables
    this.isCollapsed = true;
    this.title = "UPRC ACM Student Chapter";
  }

  ngOnInit(): void {
  }

}
