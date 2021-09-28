import React, { Component } from 'react';
import './App.css'

import Greeting from './components/navbar';

class App extends Component {
  render() {
    return (
      <>
      <Greeting isLoggedIn={true}/>
      </>
    );
  }
}

export default App;