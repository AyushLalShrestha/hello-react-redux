import { combineReducers, createStore } from 'redux';

function productsReducer(state = [], action) {
  return state;
}

function userReducer(state = '', action) {
  // action.type === 'changeState'  // This will be for the new State
  return state;
}

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(allReducers, {
  products: [{ name: 'iPhone'}],
  user: 'Ayush'
});



// cont action = {
//   name: "Ayush",
//   products: [{ name: 'iPhone'}]
// }
// store.dispatch(action)
