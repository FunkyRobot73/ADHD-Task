import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'To Do List', url: 'to-do-list', icon: 'mail' },
    { title: 'Goals', url: 'goals', icon: 'paper-plane' },
    { title: 'Achievements', url: 'achievements', icon: 'heart' },
    { title: 'Notes', url: 'notes', icon: 'archive' },
    { title: 'Video Diary', url: 'video-diary', icon: 'trash' },
    { title: 'Images Diary', url: 'images-diary', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
