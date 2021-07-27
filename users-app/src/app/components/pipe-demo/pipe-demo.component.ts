import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("here the data comes....")
    }, 2000)
  })

  filteredStatus : string = '';

  todoCollection = [
    {
      label : "to buy the jeans",
      status : "done"
    },
    {
      label : "to renew car insurance",
      status : "pending"
    },
    {
      label : "to pot the plants",
      status : "pending"
    },
  ]

  onAddNewItem(){
    // this.todoCollection = []
    this.todoCollection.push({label : "New Task", status : "pending"})
  }


}
