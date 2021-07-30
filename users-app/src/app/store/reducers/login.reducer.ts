import * as fromLoginActions from '../actions/auth.actions';

export function loginReducer(state, action: fromLoginActions.LoginActions){
  switch (action.type) {
    case fromLoginActions.LOGIN_SUCCESS:{
      // console.log("LOGIN SUCCESS - ", action.payload)
      // const token = action.payload;
      return {
        ...state,
        // token,
        isLoggedIn : true
      }
    }
    case fromLoginActions.LOGIN_FAILURE:{
      console.log("LOGIN FAILURE - ", action)
      return {
        ...state,
        isLoggedIn : false
      }
    }
    default:
      return state
  }
}
