// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private formBuilder:FormBuilder, private route:ActivatedRoute) {

    this.todoForm = formBuilder.group({
      task_name: ["", [Validators.required, Validators.minLength(3)]],
      task_desc: ["", [Validators.required]],
      date_of_start: ["", [Validators.required]],
      date_of_end: ["", [Validators.required]],
      status_of_task: ["", [Validators.required]],
      type: ["", [Validators.required]],
      task_image: ["", [Validators.required]],

    });

   }

  ngOnInit() {
  }

  onSubmit() {

  }

}
