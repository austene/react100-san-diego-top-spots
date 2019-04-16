import React from 'react';


export default props => (
  <div className='well bg-white'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a
      className='btn btn-primary'
      target='_blank'
      rel='noopener noreferrer'
      href={ `https://www.google.com/maps?q=${props.location[0]},${props.location[1]}` }>Map</a>
    <p />
  </div>
);
