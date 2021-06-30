import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersAsyncService } from '../_services/users-async.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  selectedValue:any;

  //employees$: Observable<Users[]>;

  title = 'angular';
  searchText = '';

  Post = [
    {
      character:'Thiek',
      title: 'Post 1',
      description:'Post 1 Description'
    },
    {
      character:'Mark',
      title: 'Post 2',
      description:'Post 2 Description'
    },
    {
      character:'Eric',
      title: 'Post 3',
      description:'Post 3 Description'
    },
    {
      character:'Jordan',
      title: 'Post 4',
      description:'Post 4 Description'
    },
    {
      character:'XK',
      title: 'Post 5',
      description:'Post 5 Description'
    },
    {
      character:'KH',
      title: 'Post 6',
      description:'Post 6 Description'
    },
    {
      character:'Yew Jin',
      title: 'Post 7',
      description:'Post 7 Description'
    },
    {
      character:'WS',
      title: 'Post 8',
      description:'Post 8 Description'
    }

  ]

  
  myobj = {
    myCountry:"Singapore",
    myNumber:23
  }

  selectedLevel:any;

  myArrayofObj = [
    {
      name:"Thiek",
      age:36
    },
    {
      name:"Eric",
      age:56
    },
  ]

  myString = "This is some string";

  myArray = [1,2,3,4];

  element:any;
  display:any;
  customPipeMessage:string;
  customPipeNumber:number;
  today:any;
  firstName:string;
  lastName:string;
  productPrice :number;
  discountedPrice:number;
  jsonObject: Object = {
    foo: 'bar', 
    baz: 'qux', 
    nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}
  };
  constructor(private service:UsersAsyncService) { 
    this.firstName = 'thiek';
    this.lastName = 'Soysa'
    this.productPrice = 30000;
    this.discountedPrice = 300.245;
    this.customPipeMessage = "Singapore";
    this.customPipeNumber = 23;
    //console.log(service.getUsers());
    service.users.subscribe(
      data=>this.display = data,
    )
    console.log(this.display);
  }

  ngOnInit() {
    this.today = new Date(2017,1,15);
    this.element = null;

  }

  selectChangeHandler(event:any)
  {
    this.selectedValue = event.value;
    console.log(this.selectedValue);
  }

}

