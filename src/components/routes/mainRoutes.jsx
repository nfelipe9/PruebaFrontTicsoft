import React, { useState, useEffect } from 'react';

import {
    Route,
    Switch,
    useLocation,
} from "react-router-dom";

import PageNotFound from '../PageNotFound'
import { roles } from '../adminRoles/UserArrays'

const MainRoutes = ({ ...props }) => {

    const userData = props.user
    let routes = roles()
    var sub

    const [actualRoutes] = routes.filter(selectedRol => selectedRol[0] === userData.uRol)

  
    return (
        <Switch>
            {actualRoutes[1].map((element, index) => {
                sub =
                    element[1].map((option, index) => {
                        return <Route key={index} exact path={`/${userData.uRol}/${option[0]}`} component={option[2]} />
                    }
                    )
                return (
                    [sub]
                )
            }
            )
            }
            <Route path="*" component={PageNotFound} >
                <PageNotFound home={userData.uRol} />
            </Route>
        </Switch>

    )
}

export default MainRoutes

/*
<Route exact path="/Administrador/" component={LoginAdmin} />
<Route exact path="/Vendedor/" component={LoginVendor} />
<Route exact path="/MasterAdmin/Home">
    <MasterAdmin rol={userData.uRol} />
</Route>
<Route exact path="/Vendedor/RegistrarVenta" component={RegistrarVenta} />
<Route exact path="/Vendedor/ActualizarVenta" component={ActualizarVenta} />
<Route exact path="/Administrador/RegistrarProducto" component={RegistrarProducto} />
<Route exact path="/Administrador/ActualizarProducto" component={ActualizarProducto} />

*/