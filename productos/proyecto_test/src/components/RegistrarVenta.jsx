import React, {useState} from 'react'

import './Css.css'

import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';

function Registrar() {

    const [show, setShow] = useState(false);

    return (
        <Container className="test">
            <Form>
                <Form.Group className="mb-3" controlId="formGroupNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Valor Venta" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" placeholder="Descripcion" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="text" placeholder="Cantidad" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Valor Unitario</Form.Label>
                    <Form.Control type="text" placeholder="Valor Unitario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Valor Unitario</Form.Label>
                    <Form.Control type="text" placeholder="Valor Unitario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Valor Unitario</Form.Label>
                    <Form.Control type="text" placeholder="Valor Unitario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Valor Unitario</Form.Label>
                    <Form.Control type="text" placeholder="Valor Unitario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Valor Unitario</Form.Label>
                    <Form.Control type="text" placeholder="Id Vendedor" />
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

export default Registrar;