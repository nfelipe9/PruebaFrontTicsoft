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

function NavbarVendor () {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Vendedor</Navbar.Brand>
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

function ContainerVendor() {
    return (
        <Container>
            <Row>
            <Col xs={6} md={4}>
            <Card border="dark" style={{ width: '22rem' }}>
                <Card.Header>Registrar Venta</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Se podra registrar una venta.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                <Link to="/RegistrarVenta">
                <Button variant="outline-dark">Acceder</Button>
                </Link>
                </Card.Body>
                
            </Card>
            </Col>
            
            <Col xs={6} md={4}>
            <Card border="dark" style={{ width: '22rem' }}>
                <Card.Header>Actualizar Ventas</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Se podra buscar, listar y actualizar las ventas.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                <Link to="/ActualizarVenta">
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
        <NavbarVendor/> 
        <ContainerVendor/>
            </>
        )
}

export default Greeting;
