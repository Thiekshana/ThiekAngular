import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

// lazy laoded Service module
import { ServicesModule } from './services/services.module';
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
import { AboutService } from './about.service';
import { BlogComponent } from './blog/blog.component';
import { PostsComponent } from './blog/posts/posts.component';

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
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UnsavedChangesGuard, FormGuard, AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
