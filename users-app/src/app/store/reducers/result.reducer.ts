import * as fromActions from '../actions/result.action';

const initialState = {
  result : []
}

export function resultReducer(state = initialState, action: fromActions.ResultActions){
  switch (action.type) {
    case fromActions.STORE_RESULT:{
      return {
        ...state,
        result : [...state.result, action.ctr]
      }
    }
    default:
      return state;
  }
}
