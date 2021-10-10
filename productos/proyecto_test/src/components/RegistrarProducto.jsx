import React, { Component } from 'react';
import TecsoftDataService from "../services/tecsoft.service";

import './Css.css'

import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

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
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupNombre" >
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text"
                                    id="nombre"
                                    required
                                    value={this.state.nombre}
                                    onChange={this.onChangeNombre}
                                    placeholder="Nombre" />
                            </Form.Group >
                            <Form.Group className="mb-3" controlId="formGroupDescripcion">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text"
                                    id="descripcion"
                                    required
                                    value={this.state.descripcion}
                                    onChange={this.onChangeDescripcion}
                                    placeholder="Descripcion" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupCantidad">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="text"
                                    id="cantidad"
                                    required
                                    value={this.state.cantidad}
                                    onChange={this.onChangeCantidad}
                                    name="cantidad"
                                    placeholder="Cantidad" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupValor">
                                <Form.Label>Valor Unitario</Form.Label>
                                <Form.Control type="text" 
                                 id="valor"
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