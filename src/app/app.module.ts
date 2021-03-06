import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsightsComponent } from './insights/insights.component';
import { IndustriesComponent } from './industries/industries.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesListComponent } from './services-list/services-list.component';
import {MatIconModule} from '@angular/material/icon';
// lazy laoded Service module
import { ServicesModule } from './services/services.module';
import { MypostsModule } from './myposts/myposts.module';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

//Loading UnsavedChangesGuard
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { UserDataDisplayComponent } from './user-data-display/user-data-display.component';
import { HighlightDirective } from './_directives/highlight.directive';
import { CustomLoopDirective } from './_directives/custom-loop.directive';
import { RotateAnimationDirective } from './_directives/rotate-animation.directive';
import { TdcontactComponent } from './tdcontact/tdcontact.component';
import { ForbiddennamesDirective } from './_directives/forbiddennames.directive';
import { FormGuard } from './_guards/form-guard.service';
import { SessiondataComponent } from './sessiondata/sessiondata.component';
import { IterationDirective } from './_directives/iteration.directive';
import { StickynotesComponent } from './stickynotes/stickynotes.component';
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { AboutgroupComponent } from './about/aboutgroup/aboutgroup.component';
import { BlogComponent } from './blog/blog.component';
import { PostsComponent } from './blog/posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { MypostsService } from './_services/myposts.service';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { PushnotificationComponent } from './pushnotification/pushnotification.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { AboutService } from './_services/about.service';
import { MaterialModule } from './_material/_material.module';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { DetermineTypePipe } from './determine-type.pipe';
import { SearchPipePipe } from './search-pipe.pipe';
import { GoogleChartsModule } from 'angular-google-charts';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuardService } from './_services/auth-guard.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { TokenInterceptorService } from './_services/token-interceptor.service';


export function tokenGetter() {
  return sessionStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    AboutComponent,
    InsightsComponent,
    IndustriesComponent,
    CareersComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesListComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    ListOfRegisteredUsersComponent,
    UserDataDisplayComponent,
    HighlightDirective,
    CustomLoopDirective,
    RotateAnimationDirective,
    TdcontactComponent,
    ForbiddennamesDirective,
    SessiondataComponent,
    IterationDirective,
    StickynotesComponent,
    AboutusComponent,
    AboutgroupComponent,
    BlogComponent,
    PostsComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsDisplayComponent,
    AdminpanelComponent,
    PushnotificationComponent,
    RxjsOperatorsComponent,
    PipesComponent,
    CustomPipePipe,
    DetermineTypePipe,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MypostsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    MaterialModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    GoogleChartsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter     
      }
    })
  ],
  providers: [UnsavedChangesGuard, FormGuard, AboutService,MypostsService,AuthGuardService,{
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
