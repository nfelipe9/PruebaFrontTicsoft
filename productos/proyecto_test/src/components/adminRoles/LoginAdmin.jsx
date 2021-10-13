import React, { useEffect, useState } from 'react'

import '../cssStyles/general/Css.css'


import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useHistory,
    useParams,
    Redirect
} from "react-router-dom";


const Greeting = (props) => {

    console.log(props)

    const ContainerAdmin = () => {

        const location = useLocation()
        const history = useHistory()
        const { rol } = useParams()

        const addProduct = () => {
            let path = (history.location.pathname)
            let tiporol = "Administrador"
            history.push(tiporol + "/RegistrarProducto")
        }

        const updateProduct = () => {
            let path = (history.location.pathname)
            //history.push(`ActualizarProducto`)
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

    console.log(props)
    return (
        <>
            <ContainerAdmin />
        </>
    )
}

export default Greeting;