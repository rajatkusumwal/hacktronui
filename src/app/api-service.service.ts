import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
   queuearr:String[]=['hello'];
   messagearry:any[] =[];
       private subject = new Subject<any>();
       private messagesubject = new Subject<any>();
  constructor() {
    
   }

    addQueue(queuedetails:any){
      this.queuearr.push(queuedetails);
     this.subject.next(queuedetails);
    }
   getQueue(): Observable<any> {
        return this.subject.asObservable();
    }
    addMessage(messagedetails){
      console.log(messagedetails);
      if(localStorage.messages){
        let messages = [];
        console.log(localStorage.messages);
       messages = JSON.parse(localStorage.messages);
      messages.push(messagedetails);
     localStorage.messages = JSON.stringify(messages);
      }
      else {
        localStorage.messages = [];
        let mes = [];
        mes.push(messagedetails);
        localStorage.messages= JSON.stringify(mes);
         console.log(localStorage.messages);
      }
    }
    getMessage():  Observable<any> {
      return localStorage.messages;
    }
}
