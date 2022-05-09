import { useContext } from 'react';

import requestHeader from '../assets/requestHeader';
import { apiPath } from '../assets/apiPath';
import { TaskContext } from '../context/taskContext';
import { types } from '../types/types';

export const ConfirmDelete = ({ id }) => {
  const { dispatch } = useContext(TaskContext);

  const deleteTask = () => {
    const credentials = {
      method: 'DELETE',
      headers: requestHeader,
    };

    fetch(`${apiPath}/deleteTask/${id}`, credentials)
      .then((res) => res.json())
      .then((data) => data && dispatch({ type: types.deleteTask, payload: id }))
      .catch((err) => console.log(err));
  };

  return (
    <div className='confirm-delete'>
      <h3>Are you sure you want to delete this task?</h3>
      <button onClick={deleteTask}>Yes, I Am Sure</button>
    </div>
  );
};
