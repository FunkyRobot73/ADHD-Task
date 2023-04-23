import { Component, OnInit } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  tasks!: Itask[];

  constructor(private taskService:TasksService){
    taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    });

  }

  ngOnInit() {
  }

}