import React from 'react'

import '../cssStyles/general/Css.css'


import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import {
    useHistory,    
} from "react-router-dom";


const LoginAdmin = (props) => {

    let history = useHistory()
    let rol = props.rol


    const addProduct = () => {
        history.push("/" + rol + "/RegistrarProducto")
    }

    const updateProduct = () => {
        history.push("/" + rol + "/ActualizarProducto")
    }

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
                            <Button onClick={addProduct} variant="outline-dark">Acceder</Button>
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
                            <Button onClick={updateProduct} variant="outline-dark">Acceder</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginAdmin;