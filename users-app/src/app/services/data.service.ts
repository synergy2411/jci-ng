import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

// import { USER_DATA } from '../data/mocks';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  counter : number = 0;

  constructor(private httpClient : HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClient.get("./assets/data/user.json")
      .pipe(map(response => <User[]>response['userdata']))
  }

  getDataFromAPI(){
    return this.httpClient.get("https://api.github.com/users/synergy2411")
  }


}
