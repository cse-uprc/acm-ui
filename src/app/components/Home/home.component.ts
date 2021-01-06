import { Component, OnInit } from '@angular/core';
import { StompWebsocketService } from 'acmkit/dist/acmkit-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  itemList = [
    { name: 'Dashboard', icon: 'house', link: '/home/dashboard' },
    { name: 'Classroom', icon: 'house', link: '/home/classroom' },
    { name: 'Resources', icon: 'house', link: '/home/resources' },
    { name: 'Teachers', icon: 'house', link: '/home/teachers' },
    { name: 'Student Advisors', icon: 'house', link: '/home/student-advisors' },
    { name: 'Video Lectures', icon: 'house', link: '/home/video-lectures' },
    { name: 'Calendar', icon: 'house', link: '/home/calendar' },
    { name: 'Event Sign Up', icon: 'house', link: '/home/event-sign-up' },
    { name: 'ACM Information', icon: 'house', link: '/home/acm-information' },
    { name: 'Bot Service Info', icon: 'house', link: '/home/bot-service-info' },
    { name: 'About Us', icon: 'house', link: '/home/about-us' },
    { name: 'Contact Services', icon: 'house', link: '/home/contact-services' },
  ];
  constructor(private stompService: StompWebsocketService) {}

  ngOnInit() {
    this.stompService.activate();
    this.stompService
      .watch('/notifications')
      .subscribe((res) => console.log(res));
  }
}
