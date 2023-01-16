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

  UserDetails(userObj : User) :void{
    alert("Username: "+userObj.username+"\n First name: "+userObj.first_name+"\n Last name: "+userObj.last_name
    +"\n E-mail: "+userObj.email+"\n Phone number: "+userObj.phone_number);
   }
}
