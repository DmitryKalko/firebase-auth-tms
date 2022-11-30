import { createStore, combineReducers } from 'redux';
import reducer from './reducer';


const reducers = combineReducers({
  user: reducer,
});

export const store = createStore(reducers);