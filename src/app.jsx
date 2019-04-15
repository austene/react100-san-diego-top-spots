import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App fluid'>

        <div className='jumbotron p-2 m-3 bg-white text-center border border-black sticky-top'>
          <h1 className='display-3'>San Diego Top Spots</h1>
          <hr className='mx-5' />
          <p className='lead font-italic'>A list of the top 30 places to see in San Diego, California.</p>
          {/* <hr /> */}
        </div>

      </div>
    );
  }
}

export default App;
