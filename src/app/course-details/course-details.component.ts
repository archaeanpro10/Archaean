import { Component } from '@angular/core';
import { CourseServices } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../services/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  constructor(private course: CourseServices, private router: ActivatedRoute) { }

  single_course_detials: any = {};
  previous_detials: any = {};
  next_detials: any = {};
  courseID: any = 0;
  filteredName:any = '';
  allCourseName:Course[] = [];

  ngOnInit() {
    // this.courseID = this.router.snapshot.params['id'];
    // this.router.params.subscribe(val=>this.courseID = val['id']);
    this.router.params.subscribe(val=>{
      this.courseID = val['id'];
      this.courseID = parseInt(this.courseID, 10);
      this.single_course_detials = this.course.course.find(c => c.id == this.courseID);
      this.previous_detials = this.course.course.find(c => c.id == this.courseID-1);
      this.next_detials = this.course.course.find(c => c.id == this.courseID+1);
    });
    this.allCourseName = this.course.course;
  }

  onInputChange(data:any){
    // console.log(data.target.value)
    this.filteredName = this.course.course.filter((val)=>(val.title.toLowerCase().includes(data.target.value.toLowerCase())) || (val.category.toLowerCase().includes(data.target.value.toLowerCase())));
    console.log(this.filteredName);
  }
}
