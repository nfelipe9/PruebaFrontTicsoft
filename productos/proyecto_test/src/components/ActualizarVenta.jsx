import React, { Component } from 'react';
import TecsoftDataService from "../services/tecsoft.service";

import './Css.css';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';


export default class ActualizarVenta extends Component {
    constructor(props) {
        super(props);
        this.retrieveVentas = this.retrieveVentas.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveVentas = this.setActiveVentas.bind(this);
        this.updateVentas = this.updateVentas.bind(this);
        this.onChangeIdCliente = this.onChangeIdCliente.bind(this);
        this.onChangeNombreCliente = this.onChangeNombreCliente.bind(this);
        this.onChangeCantidad = this.onChangeCantidad.bind(this);
        this.onChangeProductosId = this.onChangeProductosId.bind(this);
        this.onChangeUsuariosId = this.onChangeUsuariosId.bind(this);
        this.onChangeEstadoVenta = this.onChangeEstadoVenta.bind(this);


        this.state = {
            ventas: [],
            currentVenta: null,
            currentPosicion: -1,
            nombre: "",

            updated: false
        };
    }

    componentDidMount() {
        this.retrieveVentas();
    }

    retrieveVentas() {
        TecsoftDataService.obtenerVentas()
            .then(response => {
                this.setState({
                    ventas: response.data,
                    updated: false
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveVentas();
        this.setState({
            currentVenta: null,
            currentPosicion: -1
        });
    }

    updateVentas() {
        TecsoftDataService.actualizar(
            this.state.currentVenta.id,
            this.state.currentVenta
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "Venta updated successfully!",
                    updated: true
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    setActiveVentas(venta, posicion) {
        this.setState({
            currentVenta: venta,
            currentPosicion: posicion
        });
    }

    onChangeNombreCliente(e) {
        const nombre = e.target.value;
        this.setState(function (prevState) {
            return {
                currentVenta: {
                    ...prevState.currentVenta,
                    nombre: nombre
                }
            };
        });
    }

    onChangeEstadoVenta(e) {
        const estadoVenta = e.target.value;
        this.setState(function (prevState) {
            return {
                currentVenta: {
                    ...prevState.currentVenta,
                    estadoVenta: estadoVenta
                }
            };
        });
    }

    onChangeIdCliente(e) {
        const id = e.target.value;
        this.setState(function (prevState) {
            return {
                currentVenta: {
                    ...prevState.currentVenta,
                    id: id
                }
            };
        });
    }

    onChangeProductosId(e) {
        const productosId = e.target.value;
        this.setState(function (prevState) {
            return {
                currentVenta: {
                    ...prevState.currentVenta,
                    productosId: productosId
                }
            };
        });
    }

    onChangeUsuariosId(e) {
        const usuariosId = e.target.value;
        this.setState(function (prevState) {
            return {
                currentVenta: {
                    ...prevState.currentVenta,
                    usuariosId: usuariosId
                }
            };
        });
    }

    onChangeCantidad(e) {
        const cantidad = e.target.value;
        this.setState(function (prevState) {
            return {
                currentVenta: {
                    ...prevState.currentVenta,
                    cantidad: cantidad
                }
            };
        });
    }




    render() {

        const { ventas, currentVenta, currentPosicion } = this.state;
        return (
            <Container>


                {this.state.updated ? (
                    <div className="toastSucess">
                        <Toast onClose={this.retrieveVentas} className="toastS">
                            <Toast.Header>
                                <strong className="me-auto">Correcto</strong>
                                <small>Ahora</small>
                            </Toast.Header>
                            <Toast.Body>Venta Actualizado Correctamente</Toast.Body>
                        </Toast>
                    </div>
                ) : (
                    <div className="Ventas">
                        <Row>
                            {currentVenta ? (
                                <div>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupID">
                                                    <Form.Label>Id Venta</Form.Label>
                                                    <Form.Control type="text"
                                                        placeholder={currentVenta.id} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupNombre">
                                                    <Form.Label>Nombre Cliente</Form.Label>
                                                    <Form.Control type="text"
                                                        value={currentVenta.nombreCliente}
                                                        onChange={this.onChangeNombreCliente} disabled/>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupCantidad">
                                                    <Form.Label>Cantidad</Form.Label>
                                                    <Form.Control type="text"
                                                        value={currentVenta.cantidad}
                                                        onChange={this.onChangeCantidad}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Label >Estado Venta</Form.Label>
                                                <Form.Select aria-label="Default example" onChange={this.onChangeEstadoVenta} >
                                                    <option>En Proceso</option>
                                                    <option value="Entregado">Entregado</option>
                                                    <option value="Completado">Completado</option>
                                                    <option value="Cancelado">Cancelado</option>
                                                </Form.Select>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupEstado">
                                                    <Form.Label>Estado Venta</Form.Label>
                                                    <Form.Control type="text"
                                                        value={currentVenta.estadoVenta} disabled />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>

                                    <Form>
                                        <Row>
                                            <Col>
                                                <Button variant="outline-dark"
                                                    to={"/actualizarventa/" + currentVenta.id}
                                                    onClick={this.updateVentas}
                                                    size="lg">
                                                    Actualizar Venta
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            ) : (
                                <div>
                                    <br />
                                    <p>Selecciona una Venta</p>
                                </div>
                            )}


                        </Row>
                    </div>

                )}

                <Row>
                    <ul className="list-group">
                        {ventas && ventas.map((venta, posicion) => (

                            <li
                                className={"list-group-item " + (posicion === currentPosicion ? "active" : "")}
                                onClick={() => this.setActiveVentas(venta, posicion)}
                                key={posicion}
                            >
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Id Venta</th>
                                            <th>Id Cliente</th>
                                            <th>Nombre Cliente</th>
                                            <th>Cantidad</th>
                                            <th>Estado Venta</th>
                                            <th>Fecha de Compra</th>
                                            <th>Id Producto</th>
                                            <th>Id Vendedor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{venta.id}</td>
                                            <td>{venta.idCliente}</td>
                                            <td>{venta.nombreCliente}</td>
                                            <td>{venta.cantidad}</td>
                                            <td>{venta.estadoVenta}</td>
                                            <td>{venta.createdAt}</td>
                                            <th>{venta.productosId}</th>
                                            <th>{venta.usuarioId}</th>
                                        </tr>
                                    </tbody>
                                </Table>
                            </li>

                        ))}
                    </ul>
                </Row>
            </Container>
        );
    }
}