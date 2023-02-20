import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ring }) => {
  return (
    <div>
      <h4>MySelf</h4>
      <p>
        <small>House: {house} </small>
        <section>
          <Special ring={ring}></Special>
        </section>
      </p>
    </div>
  );
};

export default MySelf;
