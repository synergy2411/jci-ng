import { Component, OnInit } from '@angular/core';
import { USER_DATA } from 'src/app/data/mocks';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users : User[];

  onMoreInfo(user : User){
    alert(`Hello from ${user.lastName}! I am working with ${user.company}`)
  }

  ngOnInit(){
    this.users = USER_DATA;
  }

}
