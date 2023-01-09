import React from 'react';
import './Todos.css';
////////////////////////////////

const Todos = (props) => {
  const newTask = () => {};
  return (
    <button className='submit_btn' onClick={newTask}>
      Add
    </button>
  );
};

export default Todos;
