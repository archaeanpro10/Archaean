import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/services/course';
import { CourseServices } from 'src/app/services/course.service';

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.css']
})
export class HomeCoursesComponent {
  constructor(private course:CourseServices, private route:ActivatedRoute){}
  courses:Course[] = [];
  category:any;

  ngOnInit(): void {
    this.courses = this.course.course;
    this.route.params.subscribe(val=>{
      this.category = val['category'];
    });
  }
}
