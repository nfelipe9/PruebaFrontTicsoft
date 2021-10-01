import React, { Component } from 'react';
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import RegistrarProducto from './components/RegistrarProducto';
import RegistrarVenta from './components/RegistrarVenta';
import LoginVendor from './components/LoginVendor';
import LoginAdmin from './components/LoginAdmin';
import ActualizarProducto from './components/ActualizarProducto';
import ActualizarVenta from './components/ActualizarVenta';
import PageNotFound from './components/PageNotFound';
import MasterAdmin from './components/MasterAdmin';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
          <Route exact path="/Vendedor" component={LoginVendor} />
          <Route exact path="/" component={LoginAdmin} />
          <Route exact path="/RegistrarVenta" component={RegistrarVenta} />
          <Route exact path="/RegistrarProducto" component={RegistrarProducto} />
          <Route exact path="/ActualizarProducto" component={ActualizarProducto} />
          <Route exact path="/ActualizarVenta" component={ActualizarVenta} />
          <Route exact path="/Admin" component={MasterAdmin} />
          <Route component={PageNotFound} />
      </Switch>
      </Router>
    );
  }
}

export default App;