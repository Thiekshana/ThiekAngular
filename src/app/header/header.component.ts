import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn;

  constructor() {
    this.isLoggedIn = false;
   }

  ngOnInit() {
    let user = sessionStorage.getItem("Username");
    let pass = sessionStorage.getItem("Password");

    (this.isLoggedIn) = (user=='Avensys' && pass=='Avensys123') ? true : false;

  }

}
