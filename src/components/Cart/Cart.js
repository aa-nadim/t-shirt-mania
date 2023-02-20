import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one item !!!</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Amar jonno ekta nao</h3>
        <p>tomar nijer jonno ekta</p>
        <p>
          <small>amar jonno arekta nao, Please</small>
        </p>
      </div>
    );
  } else {
    message = <p>Thanks for buying !</p>;
  }
  return (
    <div>
      <h3 className={cart.length === 2 ? `orange` : `purple`}>order summry</h3>
      <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>
        Order Quantity: {cart.length}{' '}
      </h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {message}
    </div>
  );
};

export default Cart;
