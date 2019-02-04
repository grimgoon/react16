const redux = require('redux');

const initialState = {
    counter: 0,
}


// Reducer
const rootReducer = (state = initialState,action) => {
    return state;
}

// Store
const createStore = redux.createStore;
const store = createStore(rootReducer);

console.log(store.getState());

// Dispatching Action

// Subscription