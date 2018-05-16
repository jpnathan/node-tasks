import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Task } from "../models";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  constructor() { }

  tasks: Task[];
  keys: string[];

  async ngOnInit() {
    this.tasks = await new ClientService().getAllTasks();
    let keys = Object.keys(this.tasks);
    let tasksToArray = [];
    for (let prop of keys ){
      tasksToArray.push(this.tasks[prop]);
    }
    
    this.tasks = tasksToArray;
  }

}
