import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  messages:any[] =[{queueName:"name",message:"message"}];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
this.apiService.getMessage().subscribe(message => {
     this.messages.push(message);
      console.log(this.messages);
    })
  }

}
