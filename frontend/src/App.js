import { useReducer } from 'react';

import { TaskContext } from './context/taskContext';
import { taskReducer } from './reducer/taskReducer';

import { Main } from './components/Main';

import './sass/styles.scss';

export const App = () => {
  const initialState = {
    tasks: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <Main />
    </TaskContext.Provider>
  );
};
