import React, {useState} from 'react'

import './Css.css'

import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';

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

function RegistrarProducto() {

    const [show, setShow] = useState(false);

    return (
        <Container className="test">
            <Form>
                <Form.Group className="mb-3" controlId="formGroupNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescripcion">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" placeholder="Descripcion" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupCantidad">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="text" placeholder="Cantidad" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupValor">
                    <Form.Label>Valor Unitario</Form.Label>
                    <Form.Control type="text" placeholder="Valor Unitario" />
                </Form.Group>
                <div className="d-grid gap-2">
                <Button variant="outline-dark" size="lg" onClick={() => setShow(true)}>
                    Registrar
                </Button>
                </div>
            </Form>

            <Row>
                <Col xs={4} className="toastTst">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Correcto</strong>
                            <small>Ahora</small>
                        </Toast.Header>
                        <Toast.Body>Producto registrado con exito</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Container>
    )
}

function Greeting() {
        return (
            <>
        <NavbarAdmin/> 
        <RegistrarProducto/>
            </>
        )
}

export default Greeting;