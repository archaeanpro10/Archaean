import { Component } from '@angular/core';
import { CourseServices } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  constructor(private course: CourseServices, private router: ActivatedRoute) { }

  single_course_detials: any = {};
  courseID: number = 0;

  ngOnInit() {
    // this.courseID = this.router.snapshot.params['id'];
    // this.router.params.subscribe(val=>this.courseID = val['id']);
    this.router.params.subscribe(val=>{
      this.courseID = val['id'];
      this.single_course_detials = this.course.course.find(c => c.id == this.courseID);
    });
    // this.single_course_detials = this.course.course.find(c => c.id == this.courseID);
    // this.single_course_detials = this.course.course[this.courseID-1];
  }
}
