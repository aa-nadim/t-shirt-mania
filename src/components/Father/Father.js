import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
  return (
    <div>
      <h2>Father</h2>
      <p>
        <small>House: {house} </small>
      </p>
      <section className='flex'>
        <MySelf house={house}></MySelf>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </section>
    </div>
  );
};

export default Father;
