import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stickynotes',
  templateUrl: './stickynotes.component.html',
  styleUrls: ['./stickynotes.component.css']
})
export class StickynotesComponent implements OnInit {

  num:number;
  constructor() { 
    this.num = 0;
  }

  ngOnInit() {
  }

  getNum(num){
    console.log(num);
    this.num = num;
  }

/*   clearNum(sticky)
  {
    console.log(sticky);
  } */


}
