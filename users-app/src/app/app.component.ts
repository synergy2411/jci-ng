import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'users-app';
  counterState$ : Observable<{counter:number}>
  constructor(private dataService: DataService) {}

  clicked() {
    this.dataService.getDataFromAPI().subscribe(console.log);
  }

  increment() {
    this.dataService.counter++;
  }

  getCounter() {
    return this.dataService.counter;
  }
}
