import React, { Component } from 'react';
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Greeting from './components/navbar';
import Contador from './components/micomponente';
import RegistrarProducto from './components/RegistrarProducto';
import RegistrarVenta from './components/RegistrarVenta';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
          <Route exact path="/" component={Greeting} />
          <Route exact path="/RegistrarVenta" component={RegistrarVenta} />
          <Route exact path="/RegistrarProducto" component={RegistrarProducto} />
      </Switch>
      </Router>
    );
  }
}

export default App;