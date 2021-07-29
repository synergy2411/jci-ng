import { Action } from "@ngrx/store";
import * as fromActions from '../actions/counter.action';

const initialState = {
  counter : 0
}

export function counterReducer(state = initialState, action: fromActions.CounterActions){
  switch (action.type) {
    case fromActions.INCREMENT:{
      return { ...state,counter : state.counter + 1}
    }
    case fromActions.DECREMENT:{
      return {...state, counter : state.counter - 1}
    }
    case fromActions.ADD_COUNTER:{
      console.log("ACTION ", action)
      return {
        ...state,
        counter : state.counter + action.payload
      }
    }
    case fromActions.SUBTRACT_COUNTER:{
      console.log("SUBTRACT ACTION ", action)
      return {
        ...state,
        counter : state.counter - action.payload
      }
    }
    default:
      return state;
  }
}
