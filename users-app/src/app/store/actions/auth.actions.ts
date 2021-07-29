import { Action} from "@ngrx/store"

export const LOGIN_START = "[LOGIN] loggin start"
export const LOGIN_SUCCESS = "[LOGIN] login success"
export const LOGIN_FAILURE = "[LOGIN] login failure"

// Action Creators

export class LoginSuccess implements Action{
    readonly type : string = LOGIN_SUCCESS
    constructor(public payload : string){}
}
export class LoginFailure implements Action{
  readonly type : string = LOGIN_FAILURE
}
export class LoginStart implements Action {
  readonly type : string = LOGIN_START;
  constructor(public email: string, public password : string){}
}
export type LoginActions = LoginSuccess | LoginFailure
