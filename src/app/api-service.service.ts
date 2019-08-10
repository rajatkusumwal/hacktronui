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
      this.messagearry.push(messagedetails);
      this.messagesubject.next(messagedetails);
    }
    getMessage():  Observable<any> {
      return this.messagesubject.asObservable();
    }
}
