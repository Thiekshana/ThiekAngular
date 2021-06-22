import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutgroupComponent } from './about/aboutgroup/aboutgroup.component';
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BlogComponent } from './blog/blog.component';
import { PostsComponent } from './blog/posts/posts.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { InsightsComponent } from './insights/insights.component';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { LoginComponent } from './login/login.component';
import { MypostsComponent } from './myposts/myposts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products/products.component';
import { PushnotificationComponent } from './pushnotification/pushnotification.component';
import { SessiondataComponent } from './sessiondata/sessiondata.component';
import { StickynotesComponent } from './stickynotes/stickynotes.component';
import { TdcontactComponent } from './tdcontact/tdcontact.component';
import { FormGuard } from './_guards/form-guard.service';
import { Login } from './_guards/login.service';
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'insights', component: InsightsComponent
  },
  {
    path:'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path:'careers', component: CareersComponent
  },
  {
    path:'industries', component: IndustriesComponent,canActivate:[Login]
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'contact', component: ContactComponent, canDeactivate:[FormGuard]
  },
  {
    path:'login', component: LoginComponent,canDeactivate:[UnsavedChangesGuard]
  },
  {
    path:'signup',component: ListOfRegisteredUsersComponent
  },
  {
    path:'tdcontact',component: TdcontactComponent
  },
  {
    path:'sessiondata',component: SessiondataComponent
  },
  {
    path:'stickynotes',component: StickynotesComponent
  },
  {
    path:'about/aboutus',component: AboutusComponent
  },
  {
    path:'about/aboutgroup',component: AboutgroupComponent
  },
  {
    path:'blog',component: BlogComponent
  },
  {
    path:'product',component: ProductsComponent
  },
  {
    path:'product/productlist',component: ProductsListComponent
  },
  {
    path:'blog/posts',component: PostsComponent
  },
  {
    path:'myposts',loadChildren: () => import('./myposts/myposts.module').then(m => m.MypostsModule)
  },
  {
    path:'adminpanel',component: AdminpanelComponent
  },
  {
    path:'pns',component: PushnotificationComponent
  },
  {
    path:'**',component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
