// console.log('hii');

function createStore(reducer) {
  let state;
  let listeners = [];
  const getState = () => state;

  const dispatcher = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
    console.log(listeners);
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return function() {
      listeners = listeners.filter(item => item !== listener);
    }
  }


  return {
    getState,
    dispatcher,
    subscribe
  }

}
const action = { type: 'INCREMENT' };
function inc(state = 0, action){
  switch(action.type) {
    case 'INCREMENT':
      return state += 1;
    case 'DECREMENT':
      return state -= 1;
    default:
     return state;
  }
}

var store = createStore(inc);
store.subscribe(() => console.log(store.getState()))


