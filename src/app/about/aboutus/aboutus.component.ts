import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/_services/about.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  people:any;

  constructor(private aboutService:AboutService) { 
  }

  ngOnInit() {
    this.aboutService.currentObject.subscribe(people => this.people = people);
  }

}
