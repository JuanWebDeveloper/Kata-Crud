import { useContext, useEffect } from 'react';

import requestHeader from '../assets/requestHeader';
import { apiPath } from '../assets/apiPath';
import { TaskContext } from '../context/taskContext';
import { types } from '../types/types';

import { Task } from './Task';
import { Loading } from './Loading';

export const List = () => {
  const { state, dispatch } = useContext(TaskContext);
  const { tasks, loading } = state;

  useEffect(() => {
    dispatch({
      type: types.loading,
      payload: true,
    });

    const credentials = {
      method: 'GET',
      headers: requestHeader,
    };

    fetch(`${apiPath}/getAllTask`, credentials)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: types.getAllTasks,
          payload: data,
        });

        dispatch({
          type: types.loading,
          payload: false,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.loading,
          payload: false,
        });
      });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className='list'>
      {tasks.length > 0 ? (
        <>
          <h2>List of tasks</h2>
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </>
      ) : (
        <h2>No tasks created</h2>
      )}
    </div>
  );
};
