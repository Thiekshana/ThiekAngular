import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  angularversion:string;
  isgold:boolean;
  num:number;
  data=[];
  constructor() { 
    this.num=0;
  }

  ngOnInit() {
    this.angularversion = 'angular4';
    this.isgold = true;

  }

  getnum(num){
    console.log(num);
    this.num = num;
  }

}
