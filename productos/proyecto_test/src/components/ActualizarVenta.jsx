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

function ActualizarVenta() {

    const [show, setShow] = useState(false);

    return (

        <Container>
            <Row>
                <Form>
                    <Row>
                        <Col>
                        <Form.Label>Id Venta</Form.Label>
                        <Form.Select size="m">
                            <option>11122</option>
                            <option>22233</option>
                            <option>33344</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Label>Id Producto</Form.Label>
                        <Form.Select size="m">
                            <option>001</option>
                            <option>002</option>
                            <option>003</option>
                        </Form.Select>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupNombre">
                                <Form.Label>Nombre Producto</Form.Label>
                                <Form.Control type="text" placeholder="Nombre Producto" disabled/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupCliente">
                                <Form.Label>Id Cliente</Form.Label>
                                <Form.Control type="text" placeholder="Id Cliente" disabled/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupProducto">
                                <Form.Label>Nombre Cliente</Form.Label>
                                <Form.Control type="text" placeholder="Nombre Cliente" disabled/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupCantidad">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="text" placeholder="Cantidad"/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupFecha">
                                <Form.Label>Fecha Compra</Form.Label>
                                <Form.Control type="text" placeholder="Fecha" disabled/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupVendedor">
                                <Form.Label>Id Vendedor</Form.Label>
                                <Form.Control type="text" placeholder="Id Vendedor" disabled/>
                            </Form.Group>
                        </Col>
                        <Col>
                        <Form.Label>Estado Venta</Form.Label>
                        <Form.Select size="m">
                            <option>En Proceso</option>
                            <option>Cancelada</option>
                            <option>Entregada</option>
                        </Form.Select>
                        </Col>
                    </Row>
                </Form>
                <Form>
                    <Row>
                        <Col>
                        <Button variant="outline-dark" size="lg" onClick={() => setShow(true)}>
                            Actualizar Venta
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
                        <Toast.Body>Venta actualizada con exito</Toast.Body>
                    </Toast>
                </Col>

            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id Venta</th>
                            <th>Id Producto</th>
                            <th>Nombre Producto</th>
                            <th>Id Cliente</th>
                            <th>Nombre Cliente</th>
                            <th>Cantidad</th>
                            <th>Fecha de Compra</th>
                            <th>Estado de Venta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>11122</td>
                            <td>001</td>
                            <td>Telefono</td>
                            <td>121</td>
                            <td>Pepe</td>
                            <td>2</td>
                            <td>1/10/21</td>
                            <td>En proceso</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>22233</td>
                            <td>002</td>
                            <td>Computadora</td>
                            <td>121</td>
                            <td>Robert</td>
                            <td>3</td>
                            <td>1/10/21</td>
                            <td>En proceso</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>33344</td>
                            <td>003</td>
                            <td>Television</td>
                            <td>121</td>
                            <td>Marco</td>
                            <td>2</td>
                            <td>1/10/21</td>
                            <td>En proceso</td>
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
        <NavbarVendor/> 
        <ActualizarVenta/>
            </>
        )
}

export default Greeting;