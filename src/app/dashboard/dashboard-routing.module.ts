import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../_services/auth-guard.service';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';



const routes: Routes = [
  {
    path:'', component:UserDashBoardComponent
  },
  {
    path:'adminDashboard', component:AdminDashBoardComponent, canActivate: [AuthGuardService]
  },
  {

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
