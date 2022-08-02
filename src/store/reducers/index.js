import { combineReducers } from 'redux';
import timerReducer from './timerReducer';
import preloaderReducer from './preloaderReducer';


const reducer = combineReducers({
  timer: timerReducer,
  preloader: preloaderReducer,
});

export default reducer;
