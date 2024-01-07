import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SingleblogsComponent } from './singleblogs/singleblogs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { EnrollComponent } from './enroll/enroll.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'about', component : AboutComponent},
  {path:'courses', component : CoursesComponent},
  {path:'courses/:category', component : CoursesComponent},
  {path:'courses/course-details/:id', component : CourseDetailsComponent},
  {path:'blogs', component : BlogComponent},
  {path:'courses/single-blog/:id', component : SingleblogsComponent},
  {path:'contact', component : ContactComponent},
  {path:'enroll', component : EnrollComponent},
  {path:'login', component : LoginComponent},
  {path:'register', component : RegisterComponent},
  {path:'privacy-policy', component : PrivacyPolicyComponent},
  {path:'**', component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
