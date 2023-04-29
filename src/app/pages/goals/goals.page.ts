import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
  goals:any = [];
  baseURLimages = environment.baseURL;

  constructor(private tasksService: TasksService) { 
    tasksService.getTasks().subscribe((results) => {
      this.goals = results;
      
    });
   }

  ngOnInit() {
    this.loadGoals();
  }

  loadGoals() {
    this.tasksService.getTasks().subscribe((res) => {
      this.goals = [...this.goals];
      console.log(res);
    });
  }

};
