import React from 'react'

import './cssStyles/general/Css.css'
import './cssStyles/loginStyle/loginStyles.css'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { GoogleLogout } from 'react-google-login'
import { useHistory, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie'
import { roles } from './adminRoles/UserArrays'

const cookie = new Cookies();

/*export const admin = [["", "Home"],
["RegistrarProducto", "Registrar Producto"],
["ActualizarProducto", "Actualizar Producto"],
["RegistrarVenta", "Registrar Venta"],
["ActualizarVenta", "Actualizar Venta"]]

export const vendor = [["", "Home"],
["RegistrarVenta", "Registrar Venta"],
["ActualizarVenta", "Actualizar Venta"]]*/


const NavbarMenu = (props) => {

    let history = useHistory();
    let location = useLocation()
    let userData = props.user
    let clearData = props.clear
    var pathPos = location.pathname.split("/")[2]

    const AccountLogout = () => {
        clearData()
        cookie.remove('userData')
        sessionStorage.removeItem('isSignedIn')
        history.replace("/")
    }

    const handleOptions = (route) => {
        history.push(`/${rol}/${route}`)
    }

    if (userData) {
        var rol = userData.uRol;
        var items;
        var subItems;
        var menu;
        var Roles = roles()
        const [actualRol] = Roles.filter(selectedRol => selectedRol[0] === rol)

        items =
            actualRol[1].map((element, index) => {
                subItems =
                    element[1].map((option, index) => {
                        (option[0] === pathPos) && (menu = option[1])
                        return (
                            <NavDropdown.Item key={index}
                                active={(option[0] === pathPos)}
                                eventKey={option[0]}
                            >{option[1]}</NavDropdown.Item>)
                    }
                    )
                return (
                    <>
                        {subItems}
                        {index < actualRol[1].length - 1 && <NavDropdown.Divider key={index} />}
                    </>
                )
            }
            )

    }
    return (
        <>
            {(userData && location.pathname !== "/") && (
                <Navbar bg="dark" variant="dark">
                    <Container style={{ display: "flex", flexDirection: "row", minWidth: "100%", maxHeight: "60px" }} >
                        <Navbar.Brand>{rol}</Navbar.Brand>
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={menu || "Not Found"}
                                menuVariant="dark"
                                onSelect={handleOptions}
                            >
                                {items}
                            </NavDropdown>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end" style={{ gap: "10px" }} >
                            <Navbar.Text >
                                Bienvenido: <a href="#login" >{userData.uFirstName} {userData.uLastName}
                                    <span><img style={{ borderRadius: "35px", maxWidth: "40px", marginLeft: "10px" }} src={userData.uImageUrl} alt="User" ></img></span>
                                </a>
                            </Navbar.Text>
                            <GoogleLogout className="google"
                                clientId="665251628146-6lukt5lfm6afau043mjmicurun28cnmv.apps.googleusercontent.com"
                                buttonText="Logout"
                                onLogoutSuccess={AccountLogout}
                            />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}

        </>
    )
}

export default NavbarMenu;
    /*if (rol === "Administrador") {
items =
admin.map((element, index) => {
element[0]===pathPos && (menu = element[1])
return(
<NavDropdown.Item key={index}
active={(element[0] === pathPos)}
eventKey={element[0]}
>{element[1]}</NavDropdown.Item>)
}
)*/