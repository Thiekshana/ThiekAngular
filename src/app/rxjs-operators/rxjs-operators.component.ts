import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const obs$1 = fromEvent(document,'click');
    const obs$2 = interval(1000);
    const finalObs$ = obs$1.pipe(
      switchMap(event =>obs$2)
    );
    const subscription = console.log(finalObs$);
  }

}
