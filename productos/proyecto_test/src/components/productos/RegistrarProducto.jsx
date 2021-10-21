<<<<<<< HEAD:productos/proyecto_test/src/components/productos/RegistrarProducto.jsx
import React, { useState } from 'react'
=======
import React, { Component } from 'react';
import TecsoftDataService from "../services/tecsoft.service";
>>>>>>> 1e0cf0345782d1c90f7215d617b1a6618fbd5c99:productos/proyecto_test/src/components/RegistrarProducto.jsx

import '../cssStyles/general/Css.css'

import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
<<<<<<< HEAD:productos/proyecto_test/src/components/productos/RegistrarProducto.jsx
import Row from 'react-bootstrap/Row';


function NavbarAdmin() {
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

const RegistrarProducto = () => {

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


export default RegistrarProducto;
=======

export default class RegistrarProducto extends Component {


    constructor(props) {
        super(props);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
        this.onChangeCantidad = this.onChangeCantidad.bind(this);
        this.onChangeValor = this.onChangeValor.bind(this);
        this.saveProducto = this.saveProducto.bind(this);
        this.newProducto = this.newProducto.bind(this);

        this.state = {
            id: null,
            nombre: "",
            descripcion: "",
            estado: true,
            cantidad: "",
            valor: "",

            submitted: false
        };
    }

    onChangeNombre(e) {
        this.setState({
            nombre: e.target.value
        });
    }

    onChangeDescripcion(e) {
        this.setState({
            descripcion: e.target.value
        });
    }

    onChangeCantidad(e) {
        this.setState({
            cantidad: e.target.value
        });
    }

    onChangeValor(e) {
        this.setState({
            valor: e.target.value
        });
    }

    saveProducto() {
        var data = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            cantidad: this.state.cantidad,
            valor: this.state.valor
        };

        TecsoftDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    nombre: response.data.nombre,
                    descripcion: response.data.descripcion,
                    estado: response.data.estado,
                    cantidad: response.data.cantidad,
                    valor: response.data.valor,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newProducto() {
        this.setState({
            id: null,
            nombre: "",
            descripcion: "",
            estado: false,
            cantidad: "",
            valor: "",

            submitted: false
        });
    }

    render() {
        return (
            <div className="form">
                {this.state.submitted ? (
                    <div className="toastSucess">
                        <Toast onClose={this.newProducto} className="toastS">
                            <Toast.Header>
                                <strong className="me-auto">Correcto</strong>
                                <small>Ahora</small>
                            </Toast.Header>
                            <Toast.Body>Producto Agregado Correctamente</Toast.Body>
                        </Toast>
                    </div>
                ) : (
                    <div className="formSubmit">
                        <Form id="formTest">
                            <Form.Group className="mb-3" controlId="formGroupNombre" >
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text"
                                    required
                                    value={this.state.nombre}
                                    onChange={this.onChangeNombre}
                                    placeholder="Nombre" />
                            </Form.Group >
                            <Form.Group className="mb-3" controlId="formGroupDescripcion">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text"
                                    required
                                    value={this.state.descripcion}
                                    onChange={this.onChangeDescripcion}
                                    placeholder="Descripcion" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupCantidad">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="text"
                                    required
                                    value={this.state.cantidad}
                                    onChange={this.onChangeCantidad}
                                    name="cantidad"
                                    placeholder="Cantidad" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupValor">
                                <Form.Label>Valor Unitario</Form.Label>
                                <Form.Control type="text"
                                    required
                                    value={this.state.valor}
                                    onChange={this.onChangeValor}
                                    name="valor"
                                    placeholder="Valor Unitario" />
                            </Form.Group>

                            <div className="d-grid gap-2">
                                <Button variant="outline-dark"
                                    size="lg"
                                    onClick={this.saveProducto}>
                                    Registrar
                                </Button>
                            </div>
                        </Form>
                    </div >
                )}
            </div>
        );
    }
}
>>>>>>> 1e0cf0345782d1c90f7215d617b1a6618fbd5c99:productos/proyecto_test/src/components/RegistrarProducto.jsx
