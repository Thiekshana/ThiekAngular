import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  pass:string;
  //model:any;
  invalidLogin: boolean;
  constructor(private router:Router, private http:HttpClient) {

  }

  ngOnInit() {
  }

  onSubmit(){
    event.preventDefault();
    console.log(this.user);
    console.log(this.pass);
    sessionStorage.setItem('Username',this.user);
    sessionStorage.setItem('Password',this.pass);

  }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    this.http.post("http://localhost:5000/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      sessionStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
    });
  }

}
