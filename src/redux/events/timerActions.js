import {
  ADD_TIMER,
  DELETE_TIMER,
  EDIT_TIMER,
  TOGGLE_TIMER,
  UPDATE_TIMER,
} from './timerTypes';

export const addTimer = (timer) => {
  return {
    type: ADD_TIMER,
    payload: timer,
  };
};

export const deleteTimer = (id) => {
  return {
    type: DELETE_TIMER,
    id,
  };
};

export const updateTimer = (timer) => {
  return {
    type: UPDATE_TIMER,
    payload: timer,
  };
};

export const toggleTimer = (id) => {
  return {
    type: TOGGLE_TIMER,
    id,
  };
};

export const editTimer = (id) => {
  return {
    type: EDIT_TIMER,
    id,
  };
};
