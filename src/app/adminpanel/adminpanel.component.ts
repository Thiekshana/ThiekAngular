import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces/users';
import { UsersService } from '../_services/users.service';


@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  users:Users;

  firstname:string;
  lastname:string;
  email:string;
  country:string;
  address:string;

  usertoUpdate = {
    id:null,
    firstname:"",
    lastname:"",
    email:"",
    country:"",
    address:""
  }

  constructor(private userService:UsersService) { 

  }

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next:data=>{
        this.users = data
      },
      error:error=>{
        console.log(error);
        if(error.status===404){
          alert("Please check API EndPoint");
          
          // Or simply this:
          //this.pushNotification.show('And that too!');
          
        }
      }
    });
  }

  createUser()
  {
    let userObj ={
      firstname: this.firstname,
      lastname: this.lastname,
      address:this.address,
      email:this.email,
      country:this.country
    }

    this.userService.createUser(userObj).subscribe(data=>{
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });

  }

  usertoEdit(user){
    this.usertoUpdate = user;
  }

  updateUser(){
    this.userService.updateUser(this.usertoUpdate.id,this.usertoUpdate).subscribe(data=>{
      console.log(data);
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(data=>{
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }


}
