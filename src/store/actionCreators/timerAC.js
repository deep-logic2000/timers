import {
  ADD_TIMER_TO_QUEUE,
  ADD_TIME_PRESSED_BUTTON,
  UPDATE_QUEUE,
  REMOVE_TIMER_FROM_QUEUE,
  ADD_CURRENT_LOG,
} from "../actions/timerActions";

export const addTimerToQueue = (timerDelay) => (dispatch, getState) => {
  const state = getState();
  
  console.log("timerDelay from timer AC", timerDelay);
  dispatch(addTimeOfPressedButton());
  dispatch({ type: ADD_TIMER_TO_QUEUE, payload: timerDelay });
  if (state.timer.queue.length === 0) {
      dispatch(startTimer(timerDelay));
    }
};

export const addTimeOfPressedButton = () => {
    const date = new Date();
  const timeOfPressedButton = date.toLocaleTimeString();
    return { type: ADD_TIME_PRESSED_BUTTON, payload: timeOfPressedButton };

};


export const startTimer = (timerDelay) => (dispatch, getState) => {
  const date = new Date();
  const state = getState();
  if (state.timer.queue.length > 0) {
    const startTime = date.toLocaleTimeString();
    const buttonNumber = state.timer.queue[0].toString();
    console.log("startTime", startTime);
    const timerDelay = state.timer.queue[0];
    setTimeout(() => {
        dispatch(addCurrentLog({startTime, buttonNumber}));
      dispatch(removeTimerFromQueue());
      dispatch(startTimer(timerDelay));
    }, timerDelay * 1000);
}
};

export const removeTimerFromQueue = () => {
    return { type: REMOVE_TIMER_FROM_QUEUE }

};

export const addCurrentLog = (data) => {
  return { type: ADD_CURRENT_LOG, payload: data };
};
