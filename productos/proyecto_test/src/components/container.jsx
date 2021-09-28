import React from 'react'

import './Css.css'

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function ContainerAdmin(props) {
    return (
        <Container>
            <Row>
            <Col xs={6} md={4}>
            <Card border="dark" style={{ width: '22rem' }}>
                <Card.Header>Registrar Producto</Card.Header>
                <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
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
                <Card.Header>Actualizar Ventas</Card.Header>
                <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
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

function ContainerVendor(props) {
    return (
        <Container>
            <Row>
            <Col xs={6} md={4}>
            <Card border="dark" style={{ width: '22rem' }}>
                <Card.Header>Registrar Venta</Card.Header>
                <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
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
                    <Card.Title>Dark Card Title</Card.Title>
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

function Containers(props) {
    const isAdminIn = props.isAdminIn;
    if (isAdminIn) {
        return <ContainerAdmin />
    }
    return <ContainerVendor />
}

export default Containers;