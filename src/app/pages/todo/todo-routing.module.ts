import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoPage } from './todo.page';
import { NgFor } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: TodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgFor],
  exports: [RouterModule],
})
export class TodoPageRoutingModule {}
