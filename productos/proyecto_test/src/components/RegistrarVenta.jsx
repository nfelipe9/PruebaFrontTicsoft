import React, { Component } from 'react';
import TecsoftDataService from "../services/tecsoft.service";

import './Css.css'

import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';

export default class RegistrarVenta extends Component {


    constructor(props) {
        super(props);
        this.onChangeIdCliente = this.onChangeIdCliente.bind(this);
        this.onChangeNombreCliente = this.onChangeNombreCliente.bind(this);
        this.onChangeCantidad = this.onChangeCantidad.bind(this);
        this.onChangeProductosId = this.onChangeProductosId.bind(this);
        this.onChangeUsuariosId = this.onChangeUsuariosId.bind(this);
        this.saveVenta = this.saveVenta.bind(this);
        this.newVenta = this.newVenta.bind(this);
        this.retrieveProductos = this.retrieveProductos.bind(this);
        this.setActiveProductos = this.setActiveProductos.bind(this);
        this.retrieveUsuarios = this.retrieveUsuarios.bind(this);
        this.setActiveUsuarios = this.setActiveUsuarios.bind(this);

        this.state = {
            id: null,
            idCliente: "",
            nombreCliente: "",
            cantidad: "",
            estadoVenta: "En proceso",
            productosId: "",
            usuarioId: "",

            submitted: false
        };
    }

    onChangeIdCliente(e) {
        this.setState({
            idCliente: e.target.value
        });
    }

    onChangeNombreCliente(e) {
        this.setState({
            nombreCliente: e.target.value
        });
    }

    onChangeCantidad(e) {
        this.setState({
            cantidad: e.target.value
        });
    }

    onChangeProductosId(e) {
        this.setState({
            productosId: e.target.value
        });
    }

    onChangeUsuariosId(e) {
        this.setState({
            usuarioId: e.target.value
        });
    }

    componentDidMount() {
        this.retrieveProductos();
        this.retrieveUsuarios();
    }

    retrieveProductos() {
        TecsoftDataService.getAll()
            .then(response => {
                this.setState({
                    productos: response.data,
                    submitted: false
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    setActiveProductos(producto, index) {
        this.setState({
            currentProducto: producto,
            currentIndex: index
        });
    }

    retrieveUsuarios() {
        TecsoftDataService.obtenerUsuarios()
            .then(response => {
                this.setState({
                    usuarios: response.data,
                    submitted: false
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    setActiveUsuarios(usuario, posicion) {
        this.setState({
            currentUsuario: usuario,
            currentPosicion: posicion
        });
    }

    saveVenta() {
        var data = {
            idCliente: this.state.idCliente,
            nombreCliente: this.state.nombreCliente,
            cantidad: this.state.cantidad,
            productosId: this.state.productosId,
            usuarioId: this.state.usuarioId,


        }; console.log(this.state.usuarioId);

        TecsoftDataService.crear(data)
            .then(response => {
                this.setState({
                    idCliente: response.data.idCliente,
                    nombreCliente: response.data.nombreCliente,
                    cantidad: response.data.cantidad,
                    estadoVenta: response.data.estadoVenta,
                    productosId: response.data.productosId,
                    usuarioId: response.data.usuarioId,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newVenta() {
        this.setState({
            id: null,
            idCliente: "",
            nombreCliente: "",
            cantidad: "",
            estadoVenta: "",
            productosId: "",
            usuarioId: "",

            submitted: false
        });
    }

    render() {

        const { productos, currentProducto, currentIndex, usuarios, currentUsuario, currentPosicion } = this.state;

        return (
            <div className="form">
                {this.state.submitted ? (
                    <div className="toastSucess">
                        <Toast onClose={this.newVenta} className="toastS">
                            <Toast.Header>
                                <strong className="me-auto">Correcto</strong>
                                <small>Ahora</small>
                            </Toast.Header>
                            <Toast.Body>Venta Agregada Correctamente</Toast.Body>
                        </Toast>
                    </div>
                ) : (
                    <div className="formSubmit">
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Label >Id Producto</Form.Label>
                                    <Form.Select value={this.state.productosId} onChange={this.onChangeProductosId}>
                                        {productos && productos.map((producto, index) => (
                                            <option size="m" className={"list-group " + (index === currentIndex ? "active" : "")}
                                                onClick={() => this.setActiveProductos(producto, index)}
                                                key={index}
                                                value={producto.id}>{producto.id}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupNombreCliente">
                                        <Form.Label>Nombre Cliente</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            value={this.state.nombreCliente}
                                            onChange={this.onChangeNombreCliente}
                                            placeholder="Nombre Cliente" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupIdCliente">
                                        <Form.Label>Id Cliente</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            value={this.state.idCliente}
                                            onChange={this.onChangeIdCliente}
                                            placeholder="Id Cliente" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        {currentProducto ? (
                            <Container className="productos">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupNombre">
                                            <Form.Label>Nombre Producto</Form.Label>
                                            <Form.Control type="text"
                                                placeholder={currentProducto.nombre} disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupValor">
                                            <Form.Label>Valor Unitario</Form.Label>
                                            <Form.Control type="text" placeholder={currentProducto.valor} disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupCantidad">
                                            <Form.Label>Cantidad</Form.Label>
                                            <Form.Control type="text"
                                                required
                                                value={this.state.cantidad}
                                                onChange={this.onChangeCantidad}
                                                placeholder="Cantidad" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label >Id Vendedor</Form.Label>
                                        <Form.Select value={this.state.usuarioId} onChange={this.onChangeUsuariosId}>
                                            {usuarios && usuarios.map((usuario, posicion) => (
                                                <option size="m" className={"list-group " + (posicion === currentPosicion ? "active" : "")}
                                                    onClick={() => this.setActiveUsuarios(usuario, posicion)}
                                                    key={posicion}
                                                    value={usuario.id}>{usuario.id}</option>
                                            ))}
                                        </Form.Select>
                                    </Col>
                                        {currentUsuario ? (
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupNombre">
                                                    <Form.Label>Nombre Vendedor</Form.Label>
                                                    <Form.Control type="text"
                                                        placeholder={currentUsuario.FirstName} disabled />
                                                </Form.Group>
                                            </Col>) : (
                                            <label></label>
                                        )}
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant="outline-dark"
                                            onClick={this.saveVenta}
                                            size="lg">
                                            Registrar Venta
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        ) : (
                            <div className="toastSucess">
                                <Toast className="toastS">
                                    <Toast.Header>
                                        <strong className="me-auto">Atencion</strong>
                                        <small>Ahora</small>
                                    </Toast.Header>
                                    <Toast.Body>Selecciona un producto</Toast.Body>
                                </Toast>
                            </div>
                        )}
                    </div >
                )}
            </div>
        );
    }
}