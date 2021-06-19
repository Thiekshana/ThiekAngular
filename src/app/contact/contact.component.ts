import { Component, OnInit, Output, EventEmitter,AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Users } from "../_helpers/interfaces/userDetails";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  userContactInfo:any;
  registerForm : FormGroup;
  submitted:boolean;
  usersData:Users;
  message:string = "This is a child message";
  forbiddenUserNames = ['admin','test'];
  @Output() postUsersData = new EventEmitter<Users>();

  constructor(private formBuilder:FormBuilder, private router:Router) { 
    this.submitted = false;
    this.userContactInfo = [];
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname:['',[Validators.required, Validators.minLength,this.forbiddenNames.bind(this)]],
      lastname:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      country:['',Validators.required],
      address:['',Validators.required]

    });

  }

  get f(){
    return this.registerForm.controls;
  }

  handleSubmit(){
    this.submitted = true;
    //console.log(this.registerForm);
    //console.log(this.registerForm.value);
    this.usersData = this.registerForm.value;
    this.userContactInfo.push(this.usersData);
    sessionStorage.setItem('userContactInfo', JSON.stringify(this.userContactInfo));

    //console.log(this.usersData);
    this.message = "This is child message updated";
    this.postUsersData.emit(this.usersData);
    /* if(this.registerForm.status!=="INVALID"){
      confirm("Form Submitted");
      this.router.navigate(['/']);
      }
      
    else{
      return confirm("Please Fill up the form");
    } */
  }

   forbiddenNames(control:FormControl):{[s:string]:boolean}
  {
    if(this.forbiddenUserNames.indexOf(control.value)!==-1)
    {
      return {'nameIsForbidden':true};
    }
    else{
      return null;
    }
  }

  ngAfterViewInit(): void {
    
    
  }

}
