import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  Name: string = '';
  Email: string = '';

  validate():void{

  }
}
