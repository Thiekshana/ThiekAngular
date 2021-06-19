import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdcontact',
  templateUrl: './tdcontact.component.html',
  styleUrls: ['./tdcontact.component.css']
})
export class TdcontactComponent {

  @ViewChild('f',{static: false})signupForm :NgForm;

  submitted:boolean;
  user={
    firstname:'',
    lastname:'',
    email:'',
    country:'',
    address:''
  }

  constructor() { 
    this.submitted =false;
  }


  handleSubmit()
  {
    this.submitted =true;
    //console.log(this.signupForm.value.firstname);
    this.user.firstname = this.signupForm.value.firstname;
    this.user.lastname = this.signupForm.value.lastname;
    this.user.email = this.signupForm.value.email;
    this.user.country = this.signupForm.value.country;
    this.user.address = this.signupForm.value.address;
  }

}
