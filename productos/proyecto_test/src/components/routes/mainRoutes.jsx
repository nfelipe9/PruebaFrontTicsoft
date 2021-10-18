import React, { useState } from 'react';

import {
    Route,
    Switch,
    useLocation,
    withRouter,
} from "react-router-dom";


import LoginVendor from '../adminRoles/LoginVendor';
import LoginAdmin from '../adminRoles/LoginAdmin';
import MasterAdmin from '../adminRoles/MasterAdmin';
import RegistrarProducto from '../productos/RegistrarProducto';
import ActualizarProducto from '../productos/ActualizarProducto';
import RegistrarVenta from '../ventas/RegistrarVenta';
import ActualizarVenta from '../ventas/ActualizarVenta';
import PageNotFound from '../PageNotFound'


const MainRoutes = (props) => {

    let location = useLocation()
    const [userData, setUserData] = useState(props.user)


    /*
    <Route exact path="/404" component={PageNotFound}></Route>
    <Redirect from="*" to="/404" />
    
    */

    return (
        <Switch>
            <Route exact path="/Administrador/Home">
                <LoginAdmin rol={userData.uRol} />
            </Route>
            <Route exact path="/Vendedor/Home" component={LoginVendor} />
            <Route exact path="/MasterAdmin/Home" component={MasterAdmin} />
            <Route exact path="/Vendedor/RegistrarVenta" component={RegistrarVenta} />
            <Route exact path="/Vendedor/ActualizarVenta" component={ActualizarVenta} />
            <Route exact path="/Administrador/RegistrarProducto" component={RegistrarProducto} />
            <Route exact path="/Administrador/ActualizarProducto" component={ActualizarProducto} />
            <Route path="*">
                <PageNotFound home={userData.uRol} />
            </Route>
        </Switch>

    )
}

export default withRouter(MainRoutes)