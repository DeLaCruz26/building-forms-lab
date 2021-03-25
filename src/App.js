import React, { Component } from 'react';
import BandInput from './components/BandInput';
import BandsContainer from './containers/BandsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
        <BandInput />
      </div>
    );
  }
};

export default App;
