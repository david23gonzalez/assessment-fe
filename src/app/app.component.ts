import { Task } from './interfaces/task';
import { TaskService } from './services/task.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TaskService]
})
export class AppComponent {
  @Input('input') input = "Input Field";
  value = 'Clear me';

  taskList:Task[]

  constructor(private taskService : TaskService){
    var task={
      "check":false,
      "text":"Initial Task",
      "style":""
    }
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe(tasks =>{
      console.log("GET:");console.log(tasks);this.taskList=tasks;
    })
  }

  deleteTasks(){
    this.taskService.deleteTasks().subscribe(tasks =>{
      console.log(tasks);
    });
    this.getTasks();
  }

  getTextBoxVal(item){
    var task={
      "check":false,
      "text":item.value,
      "style":""
    }
    console.log(task);
    this.taskService.createTask(task).subscribe((newTask) =>{
      console.log("SUB"+newTask);
    },err =>{
      console.log("ERR:");console.log(err);
    });
    this.getTasks()
  }

  changeStyle(item){
    if(item.check){
      item.check=false;
      item.style=""
    }else{
      item.check=true;
      item.style="line-through";
    }
  }



}
