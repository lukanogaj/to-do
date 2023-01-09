import React from 'react';
import './index.css';
import Header from '../Layout/Header';
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
