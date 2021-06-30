import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { switchMap,mergeMap, map, concatMap } from 'rxjs/operators';
import { Users } from '../interfaces/users';
import { Posts } from '../interfaces/posts';
import { UsersService } from '../_services/users.service';
import { delay } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  users:Users;
  posts:Posts;
  ngOnInit() {
   const obs$1 = fromEvent(document,'click');
    const obs$2 = interval(1000);
    const finalObs$ = obs$1.pipe(
      switchMap(event =>obs$2)
    );
    //const subscription = finalObs$.subscribe((value)=>console.log(value));

    //MergeMap example
   /*  of('Angular', 'ReactJs','VueJs').pipe(
      mergeMap(el=>of(1,2).pipe(
        delay(1000),
        map(num=>el+' '+num)
      ))
    ).subscribe(res=>console.log(res)); */


    //switchMap - returns the latest

   /*  of('Angular', 'ReactJs','VueJs').pipe(
      switchMap(el=>of(1,2).pipe(
        delay(1000),
        map(num=>el+' '+num)
      ))
    ).subscribe(res=>console.log(res)); */

    
    of('Angular', 'ReactJs','VueJs').pipe(
      concatMap(el=>of(1,2).pipe(
        delay(1000),
        map(num=>el+' '+num)
      ))
    ).subscribe(res=>console.log(res));

   /*  this.usersService.getUsers().subscribe({
      next:data=>{
        this.users = data,
        console.log(this.users)
      },
      error:error=>{
        console.log(error);
        if(error.status===404){
          alert("Please check API EndPoint");
          
          // Or simply this:
          //this.pushNotification.show('And that too!');
          
        }
      }
    }); */
  }

  getPost(number:number){

  }


}
