// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {
  tasks:any = [];
  baseURLimages = environment.baseURL;
  // image:any = "";

  constructor(private tasksService: TasksService ){
    tasksService.getTasks().subscribe((results) => {
      this.tasks = results;
      // this.image = results.task_image;
    });
  }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksService.getTasks().subscribe((res) => {
      this.tasks = [...this.tasks];
      console.log(res);
    });
  }

}
