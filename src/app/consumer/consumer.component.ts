import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  messages:any[] =[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    console.log(localStorage.messages);
    this.messages = JSON.parse(localStorage.messages);
  }
  remove(msg){
    let messagearray = JSON.parse(localStorage.messages);
    messagearray.findIndex(m=> m.message);
  }
}
