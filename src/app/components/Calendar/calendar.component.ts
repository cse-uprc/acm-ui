import { Component } from '@angular/core';
import { StompWebsocketService } from 'acmkit/dist/acmkit-lib';

@Component({
  selector: 'app-home',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss'],
})
export class ClassroomComponent {
  constructor(private stompService: StompWebsocketService) {}
}
