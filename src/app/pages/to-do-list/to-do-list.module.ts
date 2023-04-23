import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoListPageRoutingModule } from './to-do-list-routing.module';

import { ToDoListPage } from './to-do-list.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoListPageRoutingModule,
    NgFor,
    HttpClientModule
  ],
  declarations: [ToDoListPage]
})
export class ToDoListPageModule {}
