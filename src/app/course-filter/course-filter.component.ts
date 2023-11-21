import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent {
  default_course:string = 'All';

  @Output() passFilterVal = new EventEmitter<string>();
  OnChange(){
    this.passFilterVal.emit(this.default_course);
  }
}
