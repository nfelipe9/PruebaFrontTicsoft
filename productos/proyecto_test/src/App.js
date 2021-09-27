import React, { Component } from 'react';
import './App.css'

import NavBarContador from "./components/navbar";
import Containertest from "./components/container";
import Greeting from './components/navbar';

class App extends Component {
  render() {
    return (
      <Greeting isLoggedIn={false}/>
    );
  }
}

export default App;