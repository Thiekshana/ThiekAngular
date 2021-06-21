import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MypostsComponent } from './myposts.component';
import { PostDetailsComponent } from './post-details/post-details.component';


const routes: Routes = [
  {
    path:'', component:MypostsComponent
  },
  {
    path:'postdetails/:id', component:PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MypostsRoutingModule { }
