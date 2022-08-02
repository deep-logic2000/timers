import { combineReducers } from 'redux';
import timerReducer from './timerReducer';

const reducer = combineReducers({
  timer: timerReducer,
});

export default reducer;
