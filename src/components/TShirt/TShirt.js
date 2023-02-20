import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className='t-shirt'>
      <img src={picture} alt='' />
      <h2>{name}</h2>
      <h4>Price: {price} </h4>
      <button>Buy this</button>
    </div>
  );
};

export default TShirt;
