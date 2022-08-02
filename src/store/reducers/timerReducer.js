import {
  ADD_TIMER_TO_QUEUE,
  UPDATE_QUEUE,
  REMOVE_TIMER_FROM_QUEUE,
  ADD_CURRENT_LOG,
  ADD_TIME_PRESSED_BUTTON,
} from "../actions/timerActions";

const initialValues = {
  queue: [],
  logs: [],
  timesOfPressedButtons: [],
};

const userReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case ADD_TIMER_TO_QUEUE: {
      const { queue } = state;
      const newQueue = [...queue, payload];
      return { ...state, queue: newQueue };
    }
    case ADD_TIME_PRESSED_BUTTON: {
      const newTimesOfPressedButtons = [...state.timesOfPressedButtons, payload];
      return { ...state, timesOfPressedButtons: newTimesOfPressedButtons };
    }
    case UPDATE_QUEUE: {
      return { ...state, queue: payload };
    }
    case REMOVE_TIMER_FROM_QUEUE: {
      const queue = state.queue;
      const newQueue = state.queue.slice(1);
      console.log("newQueue after remove", newQueue);
      return { ...state, queue: newQueue };
    }
    case ADD_CURRENT_LOG: {
      const timeOfPressedButton = state.timesOfPressedButtons[0];
      const date = new Date();
      const logShowTime = date.toLocaleTimeString();
      const passedTime = logShowTime - timeOfPressedButton;
      console.log("passedTime", passedTime);
      const logObj = {button: payload.buttonNumber, timeOfPressedButton: timeOfPressedButton, endTime: logShowTime};
      const newLogs = [...state.logs, logObj];
      const newTimesOfPressedButtons = state.timesOfPressedButtons.slice(1);
      return { ...state, logs: newLogs, timesOfPressedButtons: newTimesOfPressedButtons };
    }

    default:
      return state;
  }
};

export default userReducer;
