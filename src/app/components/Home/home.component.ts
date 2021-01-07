import { Component, OnInit, ViewChild } from '@angular/core';
import {
  SiderbarComponent,
  StompWebsocketService,
} from 'acmkit/dist/acmkit-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  itemList = [
    { name: 'Dashboard', icon: 'house', link: '/home/dashboard' },
    { name: 'Classroom', icon: 'classroom', link: '/home/classroom' },
    { name: 'Resources', icon: 'resources', link: '/home/resources' },
    { name: 'Teachers', icon: 'teachers', link: '/home/teachers' },
    {
      name: 'Student Advisors',
      icon: 'board-members',
      link: '/home/student-advisors',
    },
    { name: 'Video Lectures', icon: 'video', link: '/home/video-lectures' },
    { name: 'Calendar', icon: 'calendar', link: '/home/calendar' },
    { name: 'Event Sign Up', icon: 'contract', link: '/home/event-sign-up' },
    { name: 'ACM Information', icon: 'info', link: '/home/acm-information' },
    { name: 'Bot Service Info', icon: 'robot', link: '/home/bot-service-info' },
    { name: 'About Us', icon: 'question', link: '/home/about-us' },
    {
      name: 'Contact Services',
      icon: 'contact',
      link: '/home/contact-services',
    },
  ];
  @ViewChild(SiderbarComponent, { static: false }) sidebar: SiderbarComponent;
  sidebarOpen = true;
  constructor(private stompService: StompWebsocketService) {}

  ngOnInit() {
    this.stompService.activate();
    this.stompService
      .watch('/notifications')
      .subscribe((res) => console.log(res));
  }

  toggleSidebar(event) {
    this.sidebar.toggle();
    this.sidebarOpen = !this.sidebarOpen;
    if (this.sidebarOpen) {
      document.getElementById('content').style.margin = '0 0 0 16rem';
    } else {
      document.getElementById('content').style.margin = '0 0 0 3.5rem';
    }
  }
}
