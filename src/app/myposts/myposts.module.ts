import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypostsRoutingModule } from './myposts-routing.module';
import { MypostsComponent } from './myposts.component';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [MypostsComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    MypostsRoutingModule
  ]
})
export class MypostsModule { }
