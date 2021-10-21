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

export default class MasterAdmin extends Component {
    constructor(props) {
        super(props);
        this.retrieveUsuarios = this.retrieveUsuarios.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveUsuarios = this.setActiveUsuarios.bind(this);
        this.updateUsuario = this.updateUsuario.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeRol = this.onChangeRol.bind(this);


        this.state = {
            usuarios: [],
            currentUsuario: null,
            currentIndex: -1,
            FirstName: "",

            updated: false
        };
    }

    componentDidMount() {
        this.retrieveUsuarios();
    }

    retrieveUsuarios() {
        TecsoftDataService.obtenerUsuarios()
            .then(response => {
                this.setState({
                    usuarios: response.data,
                    updated: false
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveUsuarios();
        this.setState({
            currentUsuario: null,
            currentIndex: -1
        });
    }

    updateUsuario() {
        TecsoftDataService.actualizarUsuarios(
            this.state.currentUsuario.id,
            this.state.currentUsuario
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "Usuario updated successfully!",
                    updated: true
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    onChangeFirstName(e) {
        const FirstName = e.target.value;
        this.setState(function (prevState) {
            return {
                currentUsuario: {
                    ...prevState.currentUsuario,
                    FirstName: FirstName
                }
            };
        });
    }

    onChangeRol(e) {
        const Rol = e.target.value;
        this.setState(function (prevState) {
            return {
                currentUsuario: {
                    ...prevState.currentUsuario,
                    Rol: Rol
                }
            };
        });
    }

    onChangeEmail(e) {
        const Email = e.target.value;
        this.setState(function (prevState) {
            return {
                currentUsuario: {
                    ...prevState.currentUsuario,
                    Email: Email
                }
            };
        });
    }

    setActiveUsuarios(usuario, index) {
        this.setState({
            currentUsuario: usuario,
            currentIndex: index
        });
    }


    render() {

        const { usuarios, currentUsuario, currentIndex } = this.state;

        return (

            <div className="listItems">
                <Container>

                    {this.state.updated ? (
                        <div className="toastSucess">
                            <Toast onClose={this.retrieveUsuarios} className="toastS">
                                <Toast.Header>
                                    <strong className="me-auto">Correcto</strong>
                                    <small>Ahora</small>
                                </Toast.Header>
                                <Toast.Body>Usuario Actualizado Correctamente</Toast.Body>
                            </Toast>
                        </div>
                    ) : (

                        <div className="Usuarios">
                            <Row>
                                {currentUsuario ? (
                                    <div>
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupID">
                                                        <Form.Label>Id Usuario</Form.Label>
                                                        <Form.Control type="text"
                                                            placeholder={currentUsuario.id} disabled />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupNombre">
                                                        <Form.Label>Nombre Usuario</Form.Label>
                                                        <Form.Control type="text"
                                                            value={currentUsuario.FirstName}
                                                            onChange={this.onChangeNombre} disabled />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupApellido">
                                                        <Form.Label>Apellido Usuario</Form.Label>
                                                        <Form.Control type="text"
                                                            value={currentUsuario.LastName}
                                                            onChange={this.onChangeLastName} disabled
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Label > Seleccion Rol</Form.Label>
                                                    <Form.Select aria-label="Default example" onChange={this.onChangeRol} >
                                                        <option>Unauthorized</option>
                                                        <option value="Vendedor">Vendedor</option>
                                                        <option value="Administrador">Administrador</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupRol">
                                                        <Form.Label>Rol</Form.Label>
                                                        <Form.Control type="text"
                                                            value={currentUsuario.Rol} disabled/>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control type="text"
                                                            value={currentUsuario.Email}
                                                            onChange={this.onChangeEmail} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>

                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Button variant="outline-dark"
                                                        to={"/actualizarUsuarios/" + currentUsuario.id}
                                                        onClick={this.updateUsuario}
                                                        size="lg">
                                                        Actualizar Usuario
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                ) : (
                                    <div>
                                        <br />
                                        <p>Selecciona un Usuario</p>
                                    </div>
                                )}


                            </Row>
                        </div>

                    )}

                    <Row>
                        <ul className="list-group">
                            {usuarios && usuarios.map((usuario, index) => (

                                <li
                                    className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                    onClick={() => this.setActiveUsuarios(usuario, index)}
                                    key={index}
                                >
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Id Producto</th>
                                                <th>Nombre</th>
                                                <th>Email</th>
                                                <th>Rol</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{usuario.id}</td>
                                                <td>{usuario.FirstName}</td>
                                                <td>{usuario.Email}</td>
                                                <td>{usuario.Rol}</td>
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