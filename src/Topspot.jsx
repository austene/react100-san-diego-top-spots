import React from 'react';


export default props => (
  <div className='card my-4'>
    <div className='well m-2 bg-white'>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a
        className='btn btn-primary'
        target='_blank'
        rel='noopener noreferrer'
        href={ `https://maps.google.com/?q=${props.location[0]},${props.location[1]}` }
      >Google Map</a>
    </div>
  </div>
);
