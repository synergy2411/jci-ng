import { Action } from "@ngrx/store"

export const STORE_RESULT = "STORE_RESULT"

// Action Creators

export class StoreResult implements Action{
  readonly type = STORE_RESULT
  constructor(public ctr: number){}
}

export type ResultActions = StoreResult
