import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr =["queue1","queue2","queue3"]
  constructor(private router:Router) { }

  ngOnInit() {
  }
 redirectToMessage(){
    this.router.navigate(['/message'])
  }
}
