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
import NavbarMenu from '../MainMenu'
import RegistrarProducto from '../productos/RegistrarProducto';
import ActualizarProducto from '../productos/ActualizarProducto';
import RegistrarVenta from '../ventas/RegistrarVenta';
import ActualizarVenta from '../ventas/ActualizarVenta';
import Button from '@restart/ui/esm/Button';
import PageNotFound from '../PageNotFound'

const roles = {
    "/Administrador": <LoginAdmin></LoginAdmin>,
    "/Vendedor": <LoginVendor></LoginVendor>,
    "/MasterAdmin": <MasterAdmin></MasterAdmin>
}

const MainRoutes = (props) => {

    let history=useHistory()
    let location = useLocation()
    let { rol } = useParams()
    const [userData,setUserData]=useState(props.user)

    const [email, setEmail] = useState("")
    const [shownav, setShownav] = useState(false)

    const route = () => {
        console.log(location.pathname)
        let email = location.pathname.split("=")
        return email
    }
    console.log(props)
    /*
    */
    //console.log(userData)
    return (
        <>  
            <NavbarMenu user={userData} clear={props.clear} ></NavbarMenu>
            <Route exact path="/Administrador" component={LoginAdmin} />
            <Route exact path="/Vendedor" component={LoginVendor} />
            <Route exact path="/MasterAdmin" component={MasterAdmin} />
            <Route exact path="/Vendedor/RegistrarVenta" component={RegistrarVenta} />
            <Route exact path="/Vendedor/ActualizarVenta" component={ActualizarVenta} />
            <Route exact path="/Administrador/RegistrarProducto" component={RegistrarProducto} />
            <Route exact path="/Administrador/ActualizarProducto" component={ActualizarProducto} />
        </>
    )
}

export default MainRoutes