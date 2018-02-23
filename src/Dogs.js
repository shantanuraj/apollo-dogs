import React from 'react';
import Dog from './Dog';
import Loading from './Loading';

import './Dogs.css';

const Dogs = ({ dogs }) => {
  if (!dogs) {
    return <Loading />;
  }
  return <div className="Dogs">{dogs.map(Dog)}</div>;
}

export default Dogs;
