import React, { useState } from 'react';
import './CardInput.css';
import './Todos';

//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const CardInput = () => {
  const [setTask, setNewTask] = useState({
    enteredTask: '',
  });
  const newTaskHandler = (event) => {
    event.preventDefault();
    // setNewTask({ ...setTask, enteredTask: event.target.value });
    setNewTask((prevState) => {
      return { ...prevState, enteredTask: event.target.value };
    });
  };
  return (
    <input
      className='input_field'
      type='text'
      placeholder='New Task'
      onChange={newTaskHandler}
    />
  );
};

export default CardInput;
