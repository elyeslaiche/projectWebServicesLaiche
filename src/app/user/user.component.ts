import { Component } from '@angular/core';
import userList from '../../assets/users.json';

interface User {  
  phone_number: String;  
  first_name: String; 
  last_name: String;  
  email: String;  
  username: String;  
}  

@Component({
  selector: 'userList',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  UserList: User[] = userList; 
}
