import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  validate():void{
    alert("First Name : "+this.First_Name+"\nLast Name : "+this.Last_Name+"\nEmail : "+this.Email+"\nText : "+this.Text);
  }
}
