import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMonthlyTaskPage } from './add-monthly-task.page';

const routes: Routes = [
  {
    path: '',
    component: AddMonthlyTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMonthlyTaskPageRoutingModule {}
