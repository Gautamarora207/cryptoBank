import { combineReducers } from 'redux';

function user(state = {}, action:any) {
  switch (action.type) {
    case 'USER_ACCOUNT':
      return { ...state,  address: action.address }
    case 'USER_CRYPTO':
      return { ...state,  crypto: action.crypto }
    default:
      return state
  }
}

const rootReducer = combineReducers({
    user
});
  
export default rootReducer
  