import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMonthlyTaskPageRoutingModule } from './add-monthly-task-routing.module';

import { AddMonthlyTaskPage } from './add-monthly-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMonthlyTaskPageRoutingModule
  ],
  declarations: [AddMonthlyTaskPage]
})
export class AddMonthlyTaskPageModule {}
