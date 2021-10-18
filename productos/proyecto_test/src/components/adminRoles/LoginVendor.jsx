import React from 'react'

import '../cssStyles/general/Css.css'

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

const LoginVendor = () => {


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

export default LoginVendor;
