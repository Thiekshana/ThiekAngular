import { AfterViewInit, Component, OnInit,ElementRef, ChangeDetectorRef,ViewChild } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-sessiondata',
  templateUrl: './sessiondata.component.html',
  styleUrls: ['./sessiondata.component.css']
})
export class SessiondataComponent implements OnInit, AfterViewInit {
  userContactInfo = [];
  userData = [];
  usersFromChild = [];
  @ViewChild(ContactComponent, {static:false}) child !:ContactComponent
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
  }
  getRegisteredUsers(event){
    this.userData.push(event);
    console.log(this.userData);

}
  ngAfterViewInit(){
    this.cd.detectChanges();
  }

  retrieveData(){
    this.userContactInfo = JSON.parse(sessionStorage.getItem('userContactInfo'))
  }

}
