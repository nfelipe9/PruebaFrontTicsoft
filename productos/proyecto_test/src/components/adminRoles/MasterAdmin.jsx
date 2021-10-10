import React, {useState} from 'react'

import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/esm/Container';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/esm/Table';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

function NavbarMaster() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Master Admin</Navbar.Brand>
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

function MasterAdmin() {
    
    const [show, setShow] = useState(false);

    return (
        <Container>
            <Row>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Id" disabled />
                    <FormControl aria-label="Nombre" placeholder="Nombre" />

                    <DropdownButton
                        variant="outline-secondary"
                        title="Rol Usuario"
                        id="input-group-dropdown-2"
                        align="end"
                    >
                        <Dropdown.Item href="#">Administrador</Dropdown.Item>
                        <Dropdown.Item href="#">Vendedor</Dropdown.Item>
                    </DropdownButton>

                    <FormControl aria-label="Rol" placeholder="Rol" disabled />

                    <DropdownButton
                        variant="outline-secondary"
                        title="Estado Usuario"
                        id="input-group-dropdown-2"
                        align="end"
                    >
                        <Dropdown.Item href="#">Pendiente</Dropdown.Item>
                        <Dropdown.Item href="#">Autorizado</Dropdown.Item>
                        <Dropdown.Item href="#">No Autorizado</Dropdown.Item>
                    </DropdownButton>

                    <FormControl aria-label="Estado Usuario" placeholder="Estado" disabled />

                </InputGroup>

                <Form>
                    <Row>
                        <Col>
                            <Button variant="outline-dark" size="lg" onClick={() => setShow(true)}>
                                Actualizar Usuario
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
                    <Toast.Body>Usuario Actualizado con Exito</Toast.Body>
                </Toast>
            </Col>

            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id Usuario</th>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>123</td>
                            <td>Pepe</td>
                            <td>Administrador</td>
                            <td>Autorizado</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>345</td>
                            <td>Roberto</td>
                            <td>Vendedor</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>567</td>
                            <td>Marcos</td>
                            <td>Vendedor</td>
                            <td>No-Autorizado</td>
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
            <NavbarMaster />
            <MasterAdmin />
        </>
    )
}

export default Greeting;
