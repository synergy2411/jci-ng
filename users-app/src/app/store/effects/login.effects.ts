import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import * as fromLoginActions from '../actions/auth.actions';
import { of } from 'rxjs'

@Injectable()
export class LoginEffect {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  @Effect()
  loginEffect$ = this.actions$.pipe(
    tap(val => console.log("[TAP] : LoginEffect")),
    ofType(fromLoginActions.LOGIN_START),
    switchMap((payload: fromLoginActions.LoginStart) => {
      // Any async task
      return this.httpClient.post(`https://reqres.in/api/login`, {
        email: payload.email,
        password: payload.password
      }).pipe(
        map(response => {
          console.log("RESPONSE - ", response)
          return new fromLoginActions.LoginSuccess(response['token'])
        }),
        catchError(err => {
          console.log("ERROR - ", err)
          return of(new fromLoginActions.LoginFailure())
        })
      );
    })
  );
}
