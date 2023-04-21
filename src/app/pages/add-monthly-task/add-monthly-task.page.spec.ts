import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMonthlyTaskPage } from './add-monthly-task.page';

describe('AddMonthlyTaskPage', () => {
  let component: AddMonthlyTaskPage;
  let fixture: ComponentFixture<AddMonthlyTaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMonthlyTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
