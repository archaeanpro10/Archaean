import { Component, OnInit } from '@angular/core';
import { CourseServices } from '../services/course.service';
import { Course } from '../services/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  constructor(private course:CourseServices, private route:ActivatedRoute){}
  filter_val:string = 'All';

  receivedFilterVal(val:any){
    this.filter_val= val;
    console.log(this.filter_val);
  }
  courses:Course[] = [];
  category:any;

  ngOnInit(): void {
    this.courses = this.course.course;
    this.route.params.subscribe(val=>{
      this.category = val['category'];
    });
  }
}
