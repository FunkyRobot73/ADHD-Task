import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url = "http://localhost:3003/tasks";
  

  constructor(private http:HttpClient) { }
  
  getTasks() {
    return this.http.get<Itask[]>(this.url)
  }

  getTaskDetails(id: number) {
    return this.http.get<Itask[]>(this.url)
  }

  createTask(task_data: any) {
    return this.http.post<Itask>(this.url, task_data);
  }
  
};
