import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url = "http://localhost:3000/tasks";

  constructor(private http:HttpClient) { }
  
  getTasks(): Observable<any> {
    return this.http.get<Itask[]>(this.url)
  }

  getTaskDetails(id: string) {
    return this.http.get<Itask[]>(this.url)
  }
  
};
