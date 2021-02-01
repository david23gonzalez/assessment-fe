import { Task } from './../interfaces/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private path =  "http://localhost:8080/";
  httpHeaders = {
    headers: new HttpHeaders({'Access-Control-Allow-Origin': '*','Content-Type' : 'application/json'})
  };

  constructor(private http : HttpClient) {

  }

  public getTasks(){
    return this.http.get<Task[]>(this.path+"tasks");
  }

  public createTask(task:Task){
    return this.http.post<Task>(this.path+"post",task,this.httpHeaders);
  }

  public deleteTasks(){
    return this.http.delete(this.path+"delete");
  }

}
