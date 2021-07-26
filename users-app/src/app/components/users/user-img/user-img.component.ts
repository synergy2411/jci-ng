import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent implements OnInit {

  @Input() user : User;
  @Output() childEvent = new EventEmitter<User>()

  constructor() { }

  ngOnInit(): void {
  }

  onMoreInfo(user: User){
    this.childEvent.emit(user)
  }

}
