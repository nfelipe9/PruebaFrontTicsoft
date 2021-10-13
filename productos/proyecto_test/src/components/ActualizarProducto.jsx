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

export default class ActualizarProducto extends Component {
    constructor(props) {
        super(props);
        this.retrieveProductos = this.retrieveProductos.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProductos = this.setActiveProductos.bind(this);
        this.updateProductos = this.updateProductos.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
        this.onChangeValor = this.onChangeValor.bind(this);
        this.onChangeCantidad = this.onChangeCantidad.bind(this);


        this.state = {
            productos: [],
            currentProducto: null,
            currentIndex: -1,
            nombre: "",

            updated: false
        };
    }

    componentDidMount() {
        this.retrieveProductos();
    }

    retrieveProductos() {
        TecsoftDataService.getAll()
            .then(response => {
                this.setState({
                    productos: response.data,
                    updated:false
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveProducto();
        this.setState({
            currentProducto: null,
            currentIndex: -1
        });
    }

    updateProductos() {
        TecsoftDataService.update(
            this.state.currentProducto.id,
            this.state.currentProducto
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "Producto updated successfully!",
                    updated: true
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    onChangeNombre(e) {
        const nombre = e.target.value;
        this.setState(function (prevState) {
            return {
                currentProducto: {
                    ...prevState.currentProducto,
                    nombre: nombre
                }
            };
        });
    }

    onChangeDescripcion(e) {
        const descripcion = e.target.value;
        this.setState(function (prevState) {
            return {
                currentProducto: {
                    ...prevState.currentProducto,
                    descripcion: descripcion
                }
            };
        });
    }

    onChangeValor(e) {
        const valor = e.target.value;
        this.setState(function (prevState) {
            return {
                currentProducto: {
                    ...prevState.currentProducto,
                    valor: valor
                }
            };
        });
    }

    onChangeCantidad(e) {
        const cantidad = e.target.value;
        this.setState(function (prevState) {
            return {
                currentProducto: {
                    ...prevState.currentProducto,
                    cantidad: cantidad
                }
            };
        });
    }

    setActiveProductos(producto, index) {
        this.setState({
            currentProducto: producto,
            currentIndex: index
        });
    }


    render() {

        const { productos, currentProducto, currentIndex } = this.state;

        return (

            <div className="listItems">
                <Container>

                    {this.state.updated ? (
                        <div className="toastSucess">
                            <Toast onClose={this.retrieveProductos} className="toastS">
                                <Toast.Header>
                                    <strong className="me-auto">Correcto</strong>
                                    <small>Ahora</small>
                                </Toast.Header>
                                <Toast.Body>Producto Actualizado Correctamente</Toast.Body>
                            </Toast>
                        </div>
                    ) : (

                        <div className="Productos">
                            <Row>
                                {currentProducto ? (
                                    <div>
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupID">
                                                        <Form.Label>Id Producto</Form.Label>
                                                        <Form.Control type="text"
                                                            placeholder={currentProducto.id} disabled />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupNombre">
                                                        <Form.Label>Nombre Producto</Form.Label>
                                                        <Form.Control type="text"
                                                            value={currentProducto.nombre}
                                                            onChange={this.onChangeNombre} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupDescripcion">
                                                        <Form.Label>Descripcion Producto</Form.Label>
                                                        <Form.Control type="text" 
                                                            value={currentProducto.descripcion}
                                                            onChange={this.onChangeDescripcion}
                                                            />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupValor">
                                                        <Form.Label>Valor Unitario</Form.Label>
                                                        <Form.Control type="text"
                                                            value={currentProducto.valor}
                                                            onChange={this.onChangeValor} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupCantidad">
                                                        <Form.Label>Cantidad</Form.Label>
                                                        <Form.Control type="text" 
                                                            value={currentProducto.cantidad}
                                                            onChange={this.onChangeCantidad}/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>

                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Button variant="outline-dark"
                                                        to={"/actualizarproducto/" + currentProducto.id}
                                                        onClick={this.updateProductos}
                                                        size="lg">
                                                        Actualizar Producto
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                ) : (
                                    <div>
                                        <br />
                                        <p>Selecciona un Producto</p>
                                    </div>
                                )}


                            </Row>
                        </div>

                    )}


                    <Row>
                        <ul className="list-group">
                            {productos && productos.map((producto, index) => (

                                <li
                                    className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                    onClick={() => this.setActiveProductos(producto, index)}
                                    key={index}
                                >
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Id Producto</th>
                                                <th>Nombre</th>
                                                <th>Valor</th>
                                                <th>Descripcion</th>
                                                <th>Cantidad</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{producto.id}</td>
                                                <td>{producto.nombre}</td>
                                                <td>{producto.valor}</td>
                                                <td>{producto.descripcion}</td>
                                                <td>{producto.cantidad}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </li>

                            ))}
                        </ul>
                    </Row>
                </Container>
            </div>
        );

    }
}