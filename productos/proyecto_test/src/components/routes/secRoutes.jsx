import React, { Component, useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import RegistrarProducto from '../productos/RegistrarProducto';
import ActualizarProducto from '../productos/ActualizarProducto';
import RegistrarVenta from '../ventas/RegistrarVenta';
import ActualizarVenta from '../ventas/ActualizarVenta';

const secRoutes = () => {
    return (
        <>
            <Route exact path="/RegistrarVenta" component={RegistrarVenta} />
            <Route exact path="/ActualizarVenta" component={ActualizarVenta} />
            <Route exact path="/RegistrarProducto" component={RegistrarProducto} />
            <Route exact path="/ActualizarProducto" component={ActualizarProducto} />
        </>
    )
}

export default secRoutes
