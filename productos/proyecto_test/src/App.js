import React, { Component } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';

import {
  Route,
  Switch,
  Link
} from "react-router-dom";

import RegistrarProducto from './components/RegistrarProducto';
import ActualizarProducto from './components/ActualizarProducto';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Administrador</Navbar.Brand>

          <Nav className="me-auto">
            <Link to={"/RegistrarProducto"} className="nav-link">
            <Nav>Registrar Producto</Nav>
            </Link>
            <Link to={"/ActualizarProducto"} className="nav-link">
            <Nav>Actualizar Producto</Nav>
            </Link>
          </Nav>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Bienvenido: <a href="#login">@Username</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <Switch>
          <Route exact path={["/","/ActualizarProducto"]} component={ActualizarProducto} />
          <Route exact path="/RegistrarProducto" component={RegistrarProducto} />
          <Route path="/ActualizarProducto/:id" component={ActualizarProducto} />
        </Switch>
      </div>

      </div>
    );
  }
}

export default App;