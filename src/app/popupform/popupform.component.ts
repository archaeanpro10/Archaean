import { Component } from '@angular/core';
import { ContactFormService } from '../services/contactform.service';

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})
export class PopupformComponent {
  msg:any = '';
  constructor (private contactform: ContactFormService) {}
  onSubmit (data: any) {
    this.contactform.sendFormData(data).subscribe(
      (response: any) => {
        console.log(`Data Submited successfully=>${response}`);
        this.msg = "Data Submited successfully";
      },
      (error: any) => {
        console.error(error);
        this.msg = "Something went wrong";
      }
    )
  }
}
