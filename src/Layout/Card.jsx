import React from 'react';
import './Card.css';
import Header from './Header';
import CardInput from './CardInput';
import TaskSubmit from './TaskSubmit';

const Card = () => {
  return (
    <div className='container'>
      <Header />
      <div className='input__data'>
        <CardInput />
        <TaskSubmit />
      </div>
    </div>
  );
};

export default Card;
