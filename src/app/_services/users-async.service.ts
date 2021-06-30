import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

export interface Users{
  name:string,
  age:number
}

@Injectable({
  providedIn: 'root'
})


export class UsersAsyncService {


  users$:Observable<Users[]> = of([{
    name:"Thiek",
    age:36
  },
  {
    name:"Young",
    age:23
  },
  {
    name:"Darren",
    age:17
  }]);



}
