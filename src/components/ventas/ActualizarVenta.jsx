import React, { Component } from 'react';
import TecsoftDataService from "../services/tecsoft.service";

<<<<<<< HEAD:productos/proyecto_test/src/components/ventas/ActualizarVenta.jsx
import '../cssStyles/general/Css.css'
=======
import './Css.css';
>>>>>>> 1e0cf0345782d1c90f7215d617b1a6618fbd5c99:productos/proyecto_test/src/components/ActualizarVenta.jsx

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';


<<<<<<< HEAD:productos/proyecto_test/src/components/ventas/ActualizarVenta.jsx

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


export default ActualizarVenta
=======
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
>>>>>>> 1e0cf0345782d1c90f7215d617b1a6618fbd5c99:productos/proyecto_test/src/components/ActualizarVenta.jsx
