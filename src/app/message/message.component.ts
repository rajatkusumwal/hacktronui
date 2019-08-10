import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiServiceService} from '../api-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private apiService: ApiServiceService,private route: ActivatedRoute, private router:Router) { }
  message:String;
  queueName:string;
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
  console.log(params['params'].queueName);
  this.queueName =params['params'].queueName;
});
  }
RedirecttoHome(){
  this.apiService.addMessage({queueName:this.queueName,message:this.message});
  this.router.navigate(['/home']);
}
}
