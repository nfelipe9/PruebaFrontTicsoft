import React, { Component } from 'react';
import './App.css'

import Greeting from './components/navbar';
import Registrar from './components/Registrar';

class App extends Component {
  render() {
    return (
      <>
      <Greeting isLoggedIn={false}/>
      </>
    );
  }
}

export default App;