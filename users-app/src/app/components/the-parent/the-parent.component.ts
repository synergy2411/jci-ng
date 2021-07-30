import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-parent',
  templateUrl: './the-parent.component.html',
  styleUrls: ['./the-parent.component.css']
})
export class TheParentComponent implements OnInit {

  user = {
    email : "test@test.com"
  }
  constructor() { }

  ngOnInit(): void {
    // this.dataService.getData().subscribe(data => {
    //   this.data = data;
    //   this.dataColl.push(data);
    // })
  }

  onChangeRef(){
    this.user = {
      email : "john@test.com"
    }
  }
  onChangeProp(){
    this.user.email = "jenny@test.com"
  }

}
