import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: 'folder/inbox', icon: 'clipboard' },
    { title: 'To-Do-List', url: 'to-do-list', icon: 'clipboard' },
    { title: 'Goals', url: 'goals', icon: 'football' },
    { title: 'Achievements', url: 'achievements', icon: 'trophy' },
    { title: 'Notes', url: 'notes', icon: 'newspaper' },
    { title: 'Video Diary', url: 'video-diary', icon: 'videocam' },
    { title: 'Images Diary', url: 'images-diary', icon: 'images' },
    { title: 'todo', url: 'todo', icon: 'images' },
  ];
  public labels = ['Family', 'Friends', 'Code', 'Hobbies', 'Adele', 'Wedding'];
  constructor() {}
}
