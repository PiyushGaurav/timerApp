import {combineReducers} from 'redux';
import timerReducer from './events/timerReducer';

const rootReducer = combineReducers({
  timers: timerReducer,
});

export default rootReducer;
