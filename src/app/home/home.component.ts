import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiServiceService} from '../api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr =[{"queueName":"queue1","maxLimit":100},{"queueName":"queue2","maxLimit":100},{"queueName":"queue3","maxLimit":100}]
  constructor(private router:Router, private apiService: ApiServiceService) { }

  ngOnInit() {
       this.apiService.getQueue().subscribe(details => {
      this.arr.push(details);
    })
  }
 redirectToMessage(queueName){
    this.router.navigate(['/message'],{ queryParams: {queueName:queueName}});
  }
  redirectToConsumer(){
    this.router.navigate(['/consumer']);
  }
  
}
