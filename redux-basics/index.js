const { createStore } = require("redux")

const initalState = {
    counter : 0,
    result : [],
    token : "",
    isLoggedIn: true,
    users : []
}

// Reducer
function rootReducer(state = initalState, action){
    if(action.type === "INCREMENT"){
        // return state.counter += 1
        // console.log(Object.assign({}, {email : "test@test.com", age: 32}, {firstName :"Foo"}))
        // {email, age, firstName}
        return {
            ...state,
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            ...state,
            counter : state.counter - 1
        }
    }else if(action.type === "ADD_COUNTER"){
        return {
            ...state,
            counter : state.counter + action.payload
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer)

// Subscribe
store.subscribe(() => {
    console.log("[STATE]", store.getState());
})

// Actions
store.dispatch({type : "INCREMENT"})

// console.log("[STATE AFTER INCREMENT ACTION]", store.getState());

store.dispatch({type : "DECREMENT"})

// console.log("[STATE AFTER DECREMENT ACTION]", store.getState());

store.dispatch({type : "ADD_COUNTER", payload : 5})