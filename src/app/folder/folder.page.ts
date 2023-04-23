import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { ToDoListPage } from '../pages/to-do-list/to-do-list.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public titleNamePage!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    this.titleNamePage = ToDoListPage.name;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
  }
}
