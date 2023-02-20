import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div className='home-container'>
      <div className='t-shirt-container'>
        {tshirts.map((tshirt) => (
          <TShirt key={tshirt._id} tshirt={tshirt} />
        ))}
      </div>
      <div className='cart-container'>
        <Cart />
      </div>
    </div>
  );
};

export default Home;
