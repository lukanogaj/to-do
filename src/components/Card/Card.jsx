import React from 'react';
import './Card.css';
import Header from '../Layout/Header';
import CardInput from '../Layout/CardInput';
import ToDos from '../ToDos/ToDos';

const Card = () => {
  return (
    <div className='container'>
      <Header />
      <div className='input__data'>
        <CardInput />
      </div>
      <ToDos />
    </div>
  );
};

export default Card;
