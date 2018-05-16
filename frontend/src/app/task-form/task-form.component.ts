import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  myform: FormGroup;

  ngOnInit() {
  }

  async saveTask(params){
    await new ClientService().saveTask(params);
  }
}
