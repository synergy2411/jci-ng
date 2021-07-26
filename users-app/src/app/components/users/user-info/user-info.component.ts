import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  dynamicClass = {
    'my-border' : true,
    'my-feature' : false
  }
  dynamicStyle = {'color' : 'red', 'font-size' : '1.2em'}

  onToggle(){
    this.dynamicClass['my-border'] = !this.dynamicClass['my-border']
    this.dynamicClass['my-feature'] = !this.dynamicClass['my-feature']
  }
  @Input() user : User;

  constructor() { }

  ngOnInit(): void {
  }

}
