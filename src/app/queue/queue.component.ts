import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import {ApiServiceService} from '../api-service.service';
@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queueForm: FormGroup;
   queuearr:any[]=[];
  constructor(private formBuilder:FormBuilder,private apiService: ApiServiceService) { }

  ngOnInit() {
 
    this.queueForm = this.formBuilder.group({
    queueName: ['',Validators.required],
    maxLimit: ['',[Validators.required, Validators.max(1000)]],
  });
  }
  get queuFormCtrl(){
    return this.queueForm.controls;
  }
  updateQueueList(){
this.apiService.addQueue(this.queueForm.value);
this.queueForm.reset();
  }
 
}
