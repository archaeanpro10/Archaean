import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoImg2:string = "../../assets/img/logo/logo_white.webp";
  logoImg1:string = "../../assets/img/logo/logo.webp";
  bool:boolean = false;
  openMenu(){
    this.bool = true;
  }
}
