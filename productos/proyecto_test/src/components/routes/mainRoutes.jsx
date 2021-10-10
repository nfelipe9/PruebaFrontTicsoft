import React, { Component, useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    useHistory,
    useLocation,
    withRouter
} from "react-router-dom";


import LoginVendor from '../adminRoles/LoginVendor';
import LoginAdmin from '../adminRoles/LoginAdmin';
import MasterAdmin from '../adminRoles/MasterAdmin';
import secRoutes from './secRoutes'
import MainMenu from '../MainMenu'
import RegistrarProducto from '../productos/RegistrarProducto';
import ActualizarProducto from '../productos/ActualizarProducto';
import RegistrarVenta from '../ventas/RegistrarVenta';
import ActualizarVenta from '../ventas/ActualizarVenta';
import Button from '@restart/ui/esm/Button';


const roles = {
    "/Administrador": <LoginAdmin></LoginAdmin>,
    "/Vendedor": <LoginVendor></LoginVendor>,
    "/MasterAdmin": <MasterAdmin></MasterAdmin>
}

const MainRoutes = () => {

    let location = useLocation()
    let {id} = useParams()
    
    const [email, setEmail] = useState("")

    const route = () => {
        console.log(location.pathname)
        let email = location.pathname.split("=")
        return email
    }

    const path = () => {
        let rol = location.pathname.split("=")[0]
        for (let key in roles) {
            console.log(key)
            if (key === rol) {
                return roles[key]
            }
        }
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("actualUser"))
        setEmail(data.email)
        console.log(route())
    }, [])

    /*
    */

    return (
        <>
            <MainMenu></MainMenu>
            <Route exact path="/Administrador/:id" component={LoginAdmin} />
            <Route exact path="/Vendedor" component={LoginVendor} />
            <Route exact path="/MasterAdmin" component={MasterAdmin} />
            <Route exact path="/RegistrarVenta" component={RegistrarVenta} />
            <Route exact path="/ActualizarVenta" component={ActualizarVenta} />
            <Route exact path="/Administrador/:id/RegistrarProducto" component={RegistrarProducto} />
            <Route exact path="/Administrador/:id/ActualizarProducto" component={ActualizarProducto} />
        </>
    )
}

export default MainRoutes