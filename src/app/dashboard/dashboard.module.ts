import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { JwtModule } from '@auth0/angular-jwt';


@NgModule({
  declarations: [UserDashBoardComponent, AdminDashBoardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class DashboardModule { }
