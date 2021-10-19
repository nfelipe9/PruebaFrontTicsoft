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

import RegistrarVenta from './components/RegistrarVenta';
import ActualizarVenta from './components/ActualizarVenta';

import ActualizarUsuario from './components/MasterAdmin';

class App extends Component {
  render() {
    return (
      <MasterAdmin />
    )
  }
}

function Ventas() {
  return (
    <div>

      {/* //Borrar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Vendedor</Navbar.Brand>

          <Nav className="me-auto">
            <Link to={"/RegistrarVenta"} className="nav-link">
              <Nav>Registrar Venta</Nav>
            </Link>
            <Link to={"/ActualizarVenta"} className="nav-link">
              <Nav>Actualizar Venta</Nav>
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
  {/* //Borrar */}

      <div className="container">
        <Switch>
          <Route exact path={["/", "/ActualizarVenta"]} component={ActualizarVenta} />
          <Route exact path="/RegistrarVenta" component={RegistrarVenta} />
          <Route path="/ActualizarVenta/:id" component={ActualizarVenta} />
        </Switch>
      </div>

    </div>
  )
}

function Productos() {
  return (
    <div>

      {/* //Borrar */}
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
      {/* //Borrar */}

      <div className="container">
        <Switch>
          <Route exact path={["/", "/ActualizarProducto"]} component={ActualizarProducto} />
          <Route exact path="/RegistrarProducto" component={RegistrarProducto} />
          <Route path="/ActualizarProducto/:id" component={ActualizarProducto} />
        </Switch>
      </div>

    </div>
  )
}

function MasterAdmin() {
  return (
    <div>

      <div className="container">
        <Switch>
          <Route exact path={["/", "/MasterAdmin"]} component={ActualizarUsuario} />
          <Route path="/MasterAdmin/:id" component={MasterAdmin} />
        </Switch>
      </div>

    </div>
  )
}

export default App;