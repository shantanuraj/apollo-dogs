import React from 'react';
import './Dog.css';

const Dog = ({
  id,
  breed,
  displayImage,
 }) => (
  <div className="Dog" key={id} style={{ backgroundImage: `url(${displayImage})` }}>
    {breed}
  </div>
);

export default Dog;
