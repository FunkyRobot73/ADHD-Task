import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url = "http://localhost:3000/tasks";

  constructor(private http:HttpClient) { }
  
  getTasks() {
    return this.http.get<Itask[]>(this.url)
  }

  
};
