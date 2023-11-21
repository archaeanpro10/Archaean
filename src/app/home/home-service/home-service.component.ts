import { Component } from '@angular/core';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent {
  services_area = [
    { heading:"20+ Designing courses", para:"We have 20+ designing courses for IT students.", img:"../../../assets/img/icon/icon1.svg" },
    { heading:"Experienced Faculty", para:"We have best experienced trainer for IT & Interior/ Civil.", img:"../../../assets/img/icon/icon2.svg" },
    { heading:"Crash Courses Training", para:"There are some short term courses which will help you.", img:"../../../assets/img/icon/icon3.svg" },
  ]
}
