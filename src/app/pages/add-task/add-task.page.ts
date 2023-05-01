// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { Idepartment } from 'src/app/interfaces/idepartment';
// import { DepartmentsService } from 'src/app/services/departments.service';
// import { StudentsService } from 'src/app/services/students.service';
import { TasksService } from 'src/app/services/tasks.service';
import { NgForm } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Itask } from 'src/app/interfaces/itask';
import { ToDoListPage } from '../to-do-list/to-do-list.page';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  // standalone: true,
  // imports: [IonicModule, FormsModule, ReactiveFormsModule, NgFor, NgIf]
})
export class AddTaskPage implements OnInit {

  todoForm:any;
  // tasksService: any;

  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private tasksService: TasksService) {

    const date = new Date();
    date.setHours(date.getHours() - date.getTimezoneOffset() / 60);

    this.todoForm = formBuilder.group({
      task_name: ["", [Validators.required, Validators.minLength(3)]],
      task_desc: ["", [Validators.required]],
      date_of_start: [new Date(date).toISOString(), [Validators.required]],
      date_of_end: [new Date(date).toISOString(), [Validators.required]],
      status_of_task: ["", [Validators.required]],
      task_image: ["", [Validators.required]],
      task_type: ["", [Validators.required]],

    });

   }

  ngOnInit() {
  }

  onSubmit() {
    const task_data = this.todoForm.value;

    this.tasksService
      .createTask(task_data)
      .subscribe((result) => console.log(result));

    this.todoForm.reset();

    this.router.navigateByUrl('add-task');
    
  }
  

}
