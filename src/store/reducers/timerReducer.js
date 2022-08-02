import {
  ADD_TIMER_TO_QUEUE,
  REMOVE_TIMER_FROM_QUEUE,
  ADD_CURRENT_LOG,
  ADD_TIME_PRESSED_BUTTON,
  CLEAR_LOGS,
} from "../actions/timerActions";
import {getItemFromLS, setItemToLS} from '../../utils/localStorage'

const initialValues = {
  queue: getItemFromLS("queue") || [],
  logs: [],
  timesOfPressedButtons: getItemFromLS("timesOfPressedButtons") || [],
};

const userReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case ADD_TIMER_TO_QUEUE: {
      const { queue } = state;
      const newQueue = [...queue, payload];
      setItemToLS("queue", newQueue);
      return { ...state, queue: newQueue };
    }
    case ADD_TIME_PRESSED_BUTTON: {
      const newTimesOfPressedButtons = [...state.timesOfPressedButtons, payload];
      setItemToLS("timesOfPressedButtons", newTimesOfPressedButtons);
      return { ...state, timesOfPressedButtons: newTimesOfPressedButtons };
    }
    case REMOVE_TIMER_FROM_QUEUE: {
      const newQueue = state.queue.slice(1);
      setItemToLS("queue", newQueue);
      return { ...state, queue: newQueue };
    }
    case ADD_CURRENT_LOG: {
      const timeOfPressedButton = state.timesOfPressedButtons[0];
      const date = new Date();
      const logShowTime = date.toTimeString().split(' ')[0];
      const timeOfPressedButtonInSec = timeOfPressedButton?.split(':')[0] * 3600 + parseInt(timeOfPressedButton?.split(':')[1]*60) + parseInt(timeOfPressedButton?.split(':')[2]);
      const logShowTimeInSec = logShowTime.split(':')[0] * 3600 + parseInt(logShowTime.split(':')[1]*60) + parseInt(logShowTime.split(':')[2]);
      const difference = logShowTimeInSec - timeOfPressedButtonInSec;
      const logObj = {button: payload.buttonNumber, timeOfPressedButton: timeOfPressedButton, endTime: logShowTime, difference: difference};
      const newLogs = [...state.logs, logObj];
      const newTimesOfPressedButtons = state.timesOfPressedButtons.slice(1);
      setItemToLS("timesOfPressedButtons", newTimesOfPressedButtons);
      return { ...state, logs: newLogs, timesOfPressedButtons: newTimesOfPressedButtons };
    }
    
    case CLEAR_LOGS: {
      setItemToLS("queue", null);
      setItemToLS("timesOfPressedButtons", null);
      return { ...state, logs: [], timesOfPressedButtons: [], queue: [] };
    }
    
    default:
      return state;
  }
};

export default userReducer;
