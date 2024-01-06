import { Component } from '@angular/core'
import { ContactFormService } from '../services/contactform.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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
