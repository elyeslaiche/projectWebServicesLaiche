import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  First_Name: string = '';
  Last_Name: string = '';
  Email: string = '';
  Text: string = '';

  onSubmit(form : NgForm):void{
    alert("First Name : "+form.value.firstName+"\nLast Name : "+form.value.lastName+"\nEmail : "+form.value.email+"\nText : "+form.value.text);
  }
}
