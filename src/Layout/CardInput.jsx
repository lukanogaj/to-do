import React, { useState } from 'react';
import './CardInput.css';
import '../Layout/TaskSubmit';

//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const CardInput = () => {
  const newTaskHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className='input_field'>
      <input type='text' placeholder='New Task' onChange={newTaskHandler} />
    </div>
  );
};

export default CardInput;
