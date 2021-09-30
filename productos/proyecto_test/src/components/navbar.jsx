import React from 'react'

import './Css.css'

import Registrar from './Registrar';
import RegistrarVenta from './RegistrarVenta';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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
                <Button variant="outline-dark">Acceder</Button>
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
                <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

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
                <Button variant="outline-dark">Acceder</Button>
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
                <Button variant="outline-dark">Acceder</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>

    )
}

function Test() {
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
        </>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (
            <>
        <NavbarVendor/> 
        <RegistrarVenta/>
            </>
        )
    }
    return (
    <>
    <NavbarAdmin />
    <ContainerAdmin/>
    </>
    )
}

export default Greeting;
