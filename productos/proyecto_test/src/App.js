import React, { Component } from 'react';
import './App.css'

import Greeting from './components/navbar';
import Registrar from './components/Registrar';
import Contador from './components/micomponente';

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