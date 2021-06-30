import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn;

  constructor(private jwtHelper: JwtHelperService, private router: Router) {
    this.isLoggedIn = false;
   }

   isUserAuthenticated() {
    const token: string = sessionStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  public logOut = () => {
    sessionStorage.removeItem("jwt");
  }

  ngOnInit() {
    let user = sessionStorage.getItem("Username");
    let pass = sessionStorage.getItem("Password");

    (this.isLoggedIn) = (user=='Avensys' && pass=='Avensys123') ? true : false;

  }

}
