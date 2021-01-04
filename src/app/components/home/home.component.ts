import { Component, OnInit } from '@angular/core';
import { StompWebsocketService } from 'acmkit/dist/acmkit-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  itemList = [
    { name: 'Dashboard', icon: 'house' },
    { name: 'Classroom', icon: 'house' },
    { name: 'Resources', icon: 'house' },
    { name: 'Teachers', icon: 'house' },
    { name: 'Student Advisors', icon: 'house' },
    { name: 'Video Lectures', icon: 'house' },
    { name: 'Calendar Events', icon: 'house' },
    { name: 'Event Sign Up', icon: 'house' },
    { name: 'ACM Information', icon: 'house' },
    { name: 'Bot Service Info', icon: 'house' },
    { name: 'About Us', icon: 'house' },
    { name: 'Contact Services', icon: 'house' },
    { name: 'How to Contribute?', icon: 'house' },
  ];
  constructor(private stompService: StompWebsocketService) {}

  ngOnInit() {
    this.stompService.activate();
    this.stompService
      .watch('/notifications')
      .subscribe((res) => console.log(res));
  }
}
