import { types } from '../types/types';

export const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getAllTasks:
      return {
        ...state,
        tasks: action.payload,
      };
    case types.updateTaskList:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case types.updateTask:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case types.deleteTask:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case types.loading:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
