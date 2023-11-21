import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServices } from 'src/app/services/course.service';

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.css']
})
export class HomeCoursesComponent {
  constructor(private router:Router, private course:CourseServices){}

  courses = [
    {id:1, title:"Web & UI/UX Design", category:"Design", disc:"This is very premium course for all IT students because this is most demandale & valuable course.", img:"../../../assets/img/home/web_design.webp"},
    {id:2, title:"Civil Softwares", category:"Architecture", disc:"Civil Software incluedes AutoCAD, Revit Architecture, STAAD Pro, Etabs, Lumnion, 3Ds max & more.", img:"../../../assets/img/home/civil_courses.webp"},
    {id:3, title:"Web Development", category:"Development", disc:"Web Development incluedes many courses like Angular, React, MEAN, MERN & also Full stack development training.", img:"../../../assets/img/home/web.webp"},
    {id:4, title:"Graphic Designing", category:"Graphics", disc:"Graphic Designing includes Photoshop, Illustrator, Figma, Corel Draw, In Design, Adobe Premier Pro, After Effect & more.", img:"../../../assets/img/home/graphic_designing.webp"},
  ]
}
