import { useContext, useState } from 'react';

import requestHeader from '../assets/requestHeader';
import { apiPath } from '../assets/apiPath';
import { TaskContext } from '../context/taskContext';
import { types } from '../types/types';

export const FormEdit = ({ id, taskName, isCompleted, setIsEditing }) => {
  const [value, setValue] = useState(taskName);
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: id,
      taskName: value,
      isCompleted: isCompleted,
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

    setIsEditing(false);
  };

  return (
    <form className='form-edit_container' onSubmit={handleSubmit}>
      <input type='text' name='task' placeholder='Updated task' value={value} onChange={(e) => setValue(e.target.value)} required />
      <button type='submit'>Edit</button>
    </form>
  );
};
