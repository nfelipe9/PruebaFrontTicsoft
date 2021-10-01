import React from 'react'

import './Css.css'


import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


function NavbarAdmin () {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Administrador</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Bienvenido: <a href="#login">@Username</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

function ContainerAdmin() {
    return (
        <Container>
            <Row>
            <Col xs={6} md={4}>
            <Card border="dark" style={{ width: '22rem' }}>
                <Card.Header>Registrar Producto</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Se podra registrar un nuevo producto.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                <Link to="/RegistrarProducto">
                <Button variant="outline-dark">Acceder</Button>
                </Link>
                </Card.Body>
                
            </Card>
            </Col>
            
            <Col xs={6} md={4}>
            <Card border="dark" style={{ width: '22rem' }}>
                <Card.Header>Actualizar Productos</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Se podra buscar, listar y actualizar los productos.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                <Link to="/ActualizarProducto">
                <Button variant="outline-dark">Acceder</Button>
                </Link>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

function Greeting() {
    return (
    <>
    <NavbarAdmin />
    <ContainerAdmin/>
    </>
    )
}

export default Greeting;