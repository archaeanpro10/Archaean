import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  services_area = [
    { heading: "20+ Designing courses", para: "We have 20+ designing courses for IT students.", img: "../../../assets/img/icon/icon1.svg" },
    { heading: "Experienced Faculty", para: "We have best experienced trainer for IT & Interior/ Civil.", img: "../../../assets/img/icon/icon2.svg" },
    { heading: "Crash Courses Training", para: "There are some short term courses which will help you.", img: "../../../assets/img/icon/icon3.svg" },
  ]

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
