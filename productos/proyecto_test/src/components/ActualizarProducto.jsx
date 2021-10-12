import React, { Component } from 'react';
import TecsoftDataService from "../services/tecsoft.service";

import './Css.css';

import { Link } from "react-router-dom";

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
        this.newUpdate = this.newUpdate(this);


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
                    productos: response.data
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
        this.setState(function(prevState) {
            return {
              currentProducto: {
                ...prevState.currentProducto,
                nombre: nombre
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

    newUpdate() {
        this.setState({
            productos: [],
            currentProducto: null,
            currentIndex: -1,
            nombre: "",

            updated: false
        });
    }



    render() {

        const { productos, currentProducto, currentIndex } = this.state;

        return (

            <div className="listItems">
                <Container>
                {this.state.updated ? (
                    <div className="toastSucess">
                        <Toast onClose={this.newUpdate} className="toastS">
                            <Toast.Header>
                                <strong className="me-auto">Correcto</strong>
                                <small>Ahora</small>
                            </Toast.Header>
                            <Toast.Body>Producto Actualizado Correctamente</Toast.Body>
                        </Toast>
                    </div>
                ):(
                    <label>test</label>
                )}
                    <Row>
                        {currentProducto ? (
                            <div>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupID">
                                                <Form.Label>Id Producto</Form.Label>
                                                <Form.Control type="text" id="Id"
                                                    placeholder={currentProducto.id} disabled />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupNombre">
                                                <Form.Label>Nombre Producto</Form.Label>
                                                <Form.Control type="text" 
                                                        id="nombre"
                                                        value={currentProducto.nombre}
                                                        onChange={this.onChangeNombre}/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupDescripcion">
                                                <Form.Label>Descripcion Producto</Form.Label>
                                                <Form.Control type="text" id="descripcion" placeholder={currentProducto.descripcion} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupValor">
                                                <Form.Label>Valor Unitario</Form.Label>
                                                <Form.Control type="text" id="valor" placeholder={currentProducto.valor} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupCantidad">
                                                <Form.Label>Cantidad</Form.Label>
                                                <Form.Control type="text" id="cantidad" placeholder={currentProducto.cantidad} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>

                                <Form>
                                    <Row>
                                        <Col>
                                            <Link>
                                                <Button variant="outline-dark"
                                                    onClick={this.updateProductos}
                                                    size="lg">
                                                    Actualizar Producto
                                                </Button>
                                            </Link>
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