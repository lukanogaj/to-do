import React, { useState } from 'react';
import './CardInput.css';

//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const CardInput = () => {
  const [enteredTask, setEnteredTask] = useState('');
  const newTaskHandler = (event) => {
    event.preventDefault();
    setEnteredTask(event.target.value);
  };
  console.log(enteredTask);

  return (
    <div className='input_field'>
      <input
        type='text'
        placeholder='New Task'
        value={enteredTask}
        onChange={newTaskHandler}
      />
      <button type='submit' className='submit_btn' onClick={newTaskHandler}>
        Add
      </button>
    </div>
  );
};

export default CardInput;
