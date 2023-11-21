import { Component } from '@angular/core';

@Component({
  selector: 'app-home-subjects',
  templateUrl: './home-subjects.component.html',
  styleUrls: ['./home-subjects.component.css']
})
export class HomeSubjectsComponent {
  subjects = [
    {id:1, name:"HTML/CSS", img:"../../../assets/img/home/Htmlcss.webp"},
    {id:2, name:"C/C++", img:"../../../assets/img/home/c_c-.webp"},
    {id:3, name:"AutoCAD/Revit", img:"../../../assets/img/home/autocad.webp"},
    {id:4, name:"Staad Pro/3Ds Max", img:"../../../assets/img/home/staadpro.webp"},
    {id:6, name:"Python", img:"../../../assets/img/home/python.webp"},
    {id:5, name:"Graphics", img:"../../../assets/img/home/graphics.webp"},
    {id:7, name:"Full Stack", img:"../../../assets/img/home/full-stack.webp"},
    {id:8, name:"Databases", img:"../../../assets/img/home/databases.webp"},
  ]
}
