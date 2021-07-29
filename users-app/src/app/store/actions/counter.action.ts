import { Action } from "@ngrx/store"

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_COUNTER = "ADD_COUNTER"
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER"


export class SubtractCounter implements Action{
  readonly type: string = SUBTRACT_COUNTER;
  constructor(public payload : number){}
}

export class AddCounter implements Action{
  readonly type: string = ADD_COUNTER
  constructor(public payload: number){}
}

export type CounterActions = AddCounter | SubtractCounter
