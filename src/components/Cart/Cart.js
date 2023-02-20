import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <div>
      <h3>order summry</h3>
      <h5>Order Quantity: {cart.length} </h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
