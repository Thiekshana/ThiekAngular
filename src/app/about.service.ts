import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  ourPeople= [];

  private source = new BehaviorSubject<any>(this.ourPeople);
  currentMessage = this.source.asObservable();
  
  constructor() { }

  changeMessage(message:any)
  {
    this.source.next(message); 
  }
}
