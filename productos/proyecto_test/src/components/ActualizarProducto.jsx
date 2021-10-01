import React, {useState} from 'react'

import './Css.css'

import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';


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

function ActualizarProducto() {

    const [show, setShow] = useState(false);

    return (

        <Container>
            <Row>

                <Form>
                    <Row>
                        <Col>
                            <Form.Label>Id Producto</Form.Label>
                            <Form.Select size="m">
                                <option>001</option>
                                <option>002</option>
                                <option>003</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupValor">
                                <Form.Label>Valor Unitario</Form.Label>
                                <Form.Control type="text" placeholder="Valor Unitario" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupNombre">
                                <Form.Label>Nombre Producto</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" />
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
                                <Form.Control type="text" placeholder="Cantidad" />
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
            </Row>

            <Col xs={4} className="toastTst">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Correcto</strong>
                        <small>Ahora</small>
                    </Toast.Header>
                    <Toast.Body>Producto actualizado con exito</Toast.Body>
                </Toast>
            </Col>

            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id Producto</th>
                            <th>Nombre</th>
                            <th>Valor</th>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>001</td>
                            <td>Telefono</td>
                            <td>2000</td>
                            <td>Et harum quidem rerum facilis est et expedita distinctio</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>002</td>
                            <td>Computadora</td>
                            <td>3000</td>
                            <td>Et harum quidem rerum facilis est et expedita distinctio</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>003</td>
                            <td>Televisor</td>
                            <td>5000</td>
                            <td>Et harum quidem rerum facilis est et expedita distinctio</td>
                            <td>45</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>

        
    )
}

function Greeting() {
        return (
            <>
        <NavbarAdmin/> 
        <ActualizarProducto/>
            </>
        )
}

export default Greeting;