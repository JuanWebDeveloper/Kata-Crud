import { useContext, useState } from 'react';

import requestHeader from '../assets/requestHeader';
import { apiPath } from '../assets/apiPath';
import { TaskContext } from '../context/taskContext';
import { types } from '../types/types';

import { FormEdit } from './FormEdit';
import { ConfirmDelete } from './ConfirmDelete';

export const Task = ({ id, taskName, isCompleted }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const toggleIsCompleted = () => {
    const data = {
      id: id,
      taskName: taskName,
      isCompleted: !isCompleted,
    };

    const credentials = {
      method: 'PUT',
      headers: requestHeader,
      body: JSON.stringify(data),
    };

    fetch(`${apiPath}/updateTask`, credentials)
      .then((res) => res.json())
      .then((data) => dispatch({ type: types.updateTask, payload: data }))
      .catch((err) => console.log(err));
  };

  return (
    <div className={`task ${isCompleted && 'completed'}`}>
      <h3>{taskName}</h3>
      <div className='actions'>
        <button className='completed' onClick={toggleIsCompleted}>
          {isCompleted ? 'UnComplete' : 'Complete'}
        </button>
        <button className={`edit ${confirmDelete && 'disabled'}`} onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel edition' : 'Edit'}
        </button>
        <button className={`delete ${isEditing && 'disabled'}`} onClick={() => setConfirmDelete(!confirmDelete)}>
          {confirmDelete ? 'Cancel' : 'Delete'}
        </button>
      </div>
      {isEditing && <FormEdit id={id} taskName={taskName} isCompleted={isCompleted} setIsEditing={setIsEditing} />}
      {confirmDelete && <ConfirmDelete id={id} />}
    </div>
  );
};
