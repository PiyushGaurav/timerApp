import {
  ADD_TIMER,
  DELETE_TIMER,
  EDIT_TIMER,
  TOGGLE_TIMER,
  UPDATE_TIMER,
} from './timerTypes';

const initialState = {
  timers: [
    {
      id: 1,
      title: 'Timer 1',
      elapsed: 5456099,
      isRunning: true,
      editable: false,
    },
    {
      id: 2,
      title: 'Timer 2',
      elapsed: 1273998,
      isRunning: false,
      editable: false,
    },
    {
      id: 3,
      title: 'Timer 3',
      elapsed: 5456099,
      isRunning: true,
      editable: false,
    },
    {
      id: 4,
      title: 'Timer 4',
      elapsed: 1273998,
      isRunning: false,
      editable: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIMER:
      return {
        timers: action.payload.concat(state.timers),
      };
    case TOGGLE_TIMER:
      const toggleTimer = state.timers.map((timer) => {
        const {id, isRunning} = timer;
        if (id === action.id) {
          return {
            ...timer,
            isRunning: !isRunning,
          };
        }
        return timer;
      });
      return {
        timers: [...toggleTimer],
      };
    case EDIT_TIMER:
      const editTimer = state.timers.map((timer) => {
        const {id, editable} = timer;
        if (id === action.id) {
          return {
            ...timer,
            editable: !editable,
          };
        }
        return timer;
      });
      return {
        timers: [...editTimer],
      };
    case DELETE_TIMER:
      return {
        timers: state.timers.filter((timer) => timer.id !== action.id),
      };
    case UPDATE_TIMER:
      return {
        ...state,
        timers: [...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
