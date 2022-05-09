import { useContext, useState } from 'react';

import requestHeader from '../assets/requestHeader';
import { apiPath } from '../assets/apiPath';
import { TaskContext } from '../context/taskContext';
import { types } from '../types/types';

export const Form = () => {
  const { dispatch } = useContext(TaskContext);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: null,
      taskName: value,
      isCompleted: false,
    };

    const credentials = {
      method: 'POST',
      headers: requestHeader,
      body: JSON.stringify(data),
    };

    fetch(`${apiPath}/createTask`, credentials)
      .then((res) => res.json())
      .then((data) => dispatch({ type: types.updateTaskList, payload: data }))
      .catch((error) => console.log(error));

    setValue('');
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input type='text' name='task' placeholder='Create new task' value={value} onChange={(e) => setValue(e.target.value)} required />
      <button type='submit'>Create</button>
    </form>
  );
};
