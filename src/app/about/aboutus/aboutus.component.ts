import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/about.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  people:any;
  constructor(private aboutService:AboutService) { 
    this.people = [];
  }

  ngOnInit() {
    this.people = [];
    this.aboutService.currentMessage.subscribe(people => this.people = people);
  }

}
