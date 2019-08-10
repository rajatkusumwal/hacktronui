import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dbshacktron';
  arr =["queue1","queue2","queue3"]

constructor(private router: Router){}
  redirectToMessage(){
    this.router.navigate(['/message'])
  }
}
