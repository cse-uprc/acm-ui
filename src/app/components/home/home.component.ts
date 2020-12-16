import { Component, OnInit } from '@angular/core';
import { StompWebsocketService } from 'acmkit/dist/acmkit-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private stompService: StompWebsocketService) {}

  ngOnInit() {
    this.stompService.activate();
    this.stompService
      .watch('/notifications')
      .subscribe((res) => console.log(res));
  }
}
