import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-app';

  constructor(private dataService : DataService){}

  increment(){
    this.dataService.counter++;
  }

  getCounter(){
    return this.dataService.counter;
  }

}
