import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './header/preloader/preloader.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { HomeServiceComponent } from './home/home-service/home-service.component';
import { HomeCoursesComponent } from './home/home-courses/home-courses.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeSubjectsComponent } from './home/home-subjects/home-subjects.component';
import { HomeAbout2Component } from './home/home-about2/home-about2.component';
import { HomeExpertsComponent } from './home/home-experts/home-experts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { SingleblogsComponent } from './singleblogs/singleblogs.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { EnrollComponent } from './enroll/enroll.component';
import { CourseServices } from './services/course.service';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PopupformComponent } from './popupform/popupform.component';
import { AngularFireModule } from "@angular/fire/compat"
import { firebaseConfig } from 'src/auth';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    HomeComponent,
    HeroComponent,
    HomeServiceComponent,
    HomeCoursesComponent,
    HomeAboutComponent,
    HomeSubjectsComponent,
    HomeAbout2Component,
    HomeExpertsComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    BlogComponent,
    SingleblogsComponent,
    CourseDetailsComponent,
    NotFoundComponent,
    LoginComponent,
    EnrollComponent,
    CourseFilterComponent,
    RegisterComponent,
    PopupformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule
  ],
  providers: [CourseServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
