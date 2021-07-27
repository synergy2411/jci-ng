import { Component, OnInit } from '@angular/core';
// import { USER_DATA } from 'src/app/data/mocks';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // providers : [DataService]
})
export class UsersComponent implements OnInit{
  users : User[];

  constructor(private dataService : DataService){}

  increment(){
    this.dataService.counter++;
  }

  getCounter(){
    return this.dataService.counter;
  }

  onMoreInfo(user : User){
    alert(`Hello from ${user.lastName}! I am working with ${user.company}`)
  }

  ngOnInit(){
    this.dataService.getUsers()
      .subscribe(users => this.users = users);
  }

}
