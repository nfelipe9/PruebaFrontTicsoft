import React, {useState} from 'react'

import './Css.css'

import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';

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

function ActualizarProducto() {

    const [show, setShow] = useState(false);

    return (

        <Container className="test">

                <Form>
                    <Row>
                        <Col>
                        <Form.Label>Id Producto</Form.Label>
                        <Form.Select size="m">
                            <option>11122</option>
                            <option>22233</option>
                            <option>33344</option>
                        </Form.Select>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupValor">
                                <Form.Label>Valor Unitario</Form.Label>
                                <Form.Control type="text" placeholder="Valor Unitario"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupNombre">
                                <Form.Label>Nombre Producto</Form.Label>
                                <Form.Control type="text" placeholder="Nombre"/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupValor">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" placeholder="Descripcion" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupValor">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="text" placeholder="Cantidad"/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <Form>
                    <Row>
                        <Col>
                        <Button variant="outline-dark" size="lg" onClick={() => setShow(true)}>
                            Actualizar Producto
                        </Button>
                        </Col>
                    </Row>
                </Form>

                <Col xs={4} className="toastTst">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Correcto</strong>
                            <small>Ahora</small>
                        </Toast.Header>
                        <Toast.Body>Producto actualizado con exito</Toast.Body>
                    </Toast>
                </Col>
        </Container>
    )
}

function Greeting() {
        return (
            <>
        <NavbarVendor/> 
        <ActualizarProducto/>
            </>
        )
}

export default Greeting;