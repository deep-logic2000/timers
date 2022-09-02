import {
  ADD_TIMER_TO_QUEUE,
  ADD_TIME_PRESSED_BUTTON,
  REMOVE_TIMER_FROM_QUEUE,
  ADD_CURRENT_LOG,
  CLEAR_LOGS,
  SET_CURRENT_TIMER,
} from "../actions/timerActions";

export const addTimerToQueue = (timerDelay) => (dispatch, getState) => {
  const state = getState();
  dispatch(addTimeOfPressedButton());
  dispatch({ type: ADD_TIMER_TO_QUEUE, payload: timerDelay });
  if (state.timer.queue.length === 0) {
    dispatch(startTimer(timerDelay));
  }
};

export const addTimeOfPressedButton = () => {
  const date = new Date();
  const timeOfPressedButton = date.toTimeString().split(" ")[0];
  return { type: ADD_TIME_PRESSED_BUTTON, payload: timeOfPressedButton };
};

export const startTimer = (clearTimeout) => (dispatch, getState) => {
  const state = getState();
  const date = new Date();
  if (state.timer.queue.length > 0) {
    const startTime = date.toTimeString().split(" ")[0];
    const buttonNumber = state.timer.queue[0].toString();
    const timerDelay = state.timer.queue[0];
    const timerId = setTimeout(() => {
      dispatch(addCurrentLog({ startTime, buttonNumber }));
      dispatch(removeTimerFromQueue());
      dispatch(startTimer());
    }, timerDelay * 1000);
    dispatch({ type: SET_CURRENT_TIMER, payload: timerId });
  }
};

export const removeTimerFromQueue = () => {
  return { type: REMOVE_TIMER_FROM_QUEUE };
};

export const addCurrentLog = (data) => {
  return { type: ADD_CURRENT_LOG, payload: data };
};

export const clearLog = () => {
  return { type: CLEAR_LOGS };
};
