import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTaskPage } from './add-task.page';
import { AddTaskPageModule } from './add-task.module';

const routes: Routes = [
  {
    path: '',
    component: AddTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTaskPageRoutingModule {}
