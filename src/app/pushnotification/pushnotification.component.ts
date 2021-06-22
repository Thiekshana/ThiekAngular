import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-pushnotification',
  templateUrl: './pushnotification.component.html',
  styleUrls: ['./pushnotification.component.css']
})
export class PushnotificationComponent implements OnInit {

  constructor(private pushNotification:ToastrService) { }

  ngOnInit() {
  }

  showPush() {
    this.pushNotification.success('This is a message','Message Heading',{
      timeOut:2000,
      progressBar:true
  });

  }
 
}
