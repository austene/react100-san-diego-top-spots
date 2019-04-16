import React, { Component } from 'react';
import axios from 'axios';
import Topspots from './Topspot';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }
  render() {
    return (
      <div className='App fluid'>

        <div className='jumbotron p-2 bg-white text-center border border-black sticky-top'>
          <h1 className='display-3'>San Diego Top Spots</h1>
          <hr className='mx-5' />
          <p className='lead font-italic'>A list of the top 30 places to see in San Diego, California.</p>
        </div>
        {
          this.state.topspots.map(topspot => (
            <Topspots
              key={ topspot.id }
              name={ topspot.name }
              description={ topspot.description }
              location={ topspot.location }
            />
          ))
        }

      </div>
    );
  }
}

export default App;
