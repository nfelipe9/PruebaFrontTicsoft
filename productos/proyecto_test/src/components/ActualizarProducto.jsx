import React, { useState, Component } from 'react';
import TecsoftDataService from "../services/tecsoft.service";

import './Css.css';

import { Link } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default class ActualizarProducto extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchNombre = this.onChangeSearchNombre.bind(this);
        this.retrieveProductos = this.retrieveProductos.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProductos = this.setActiveProductos.bind(this);
        this.searchNombre = this.searchNombre.bind(this);


        this.state = {
            productos: [],
            currentProducto: null,
            currentIndex: -1,
            searchNombre: ""
        };
    }

    componentDidMount() {
        this.retrieveProductos();
    }

    onChangeSearchNombre(e) {
        const searchNombre = e.target.value;

        this.setState({
            searchNombre: searchNombre
        });
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

    setActiveProductos(producto, index) {
        this.setState({
            currentProducto: producto,
            currentIndex: index
        });
    }

    searchNombre() {
        TecsoftDataService.findByNombre(this.state.searchNombre)
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


    render() {

        const { searchNombre, productos, currentProducto, currentIndex } = this.state;

        return (

            <div className="listItems">
                <Container>

                    <Row>
                        {currentProducto ? (
                            <div>
                                <div>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupValor">
                                                    <Form.Label>Id Producto</Form.Label>
                                                    <Form.Control type="text" placeholder={currentProducto.id} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupNombre">
                                                    <Form.Label>Nombre Producto</Form.Label>
                                                    <Form.Control type="text" placeholder={currentProducto.nombre} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupNombre">
                                                    <Form.Label>Descripcion Producto</Form.Label>
                                                    <Form.Control type="text" placeholder={currentProducto.descripcion} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupValor">
                                                    <Form.Label>Valor Unitario</Form.Label>
                                                    <Form.Control type="text" placeholder={currentProducto.valor} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formGroupValor">
                                                    <Form.Label>Cantidad</Form.Label>
                                                    <Form.Control type="text" placeholder={currentProducto.cantidad} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>

                                    <Form>
                                        <Row>
                                            <Col>
                                            <Link to={"/tutorials/" + currentProducto.id}>
                                                <Button variant="outline-dark" size="lg">
                                                    Actualizar Producto
                                                </Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>

                                <Link
                                    to={"/tutorials/" + currentProducto.id}
                                    className="badge badge-warning"
                                >
                                    Actualizar
                                </Link>
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

/*
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
} */