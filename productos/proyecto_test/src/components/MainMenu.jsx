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

const cookie = new Cookies();

const admin = [["Home", "Home"],
["RegistrarProducto", "Registrar Producto"],
["ActualizarProducto", "Actualizar Producto"],
["RegistrarVenta", "Registrar Venta"],
["ActualizarVenta", "Actualizar Venta"]]

const vendor = [["Home", "Home"],
["RegistrarVenta", "Registrar Venta"],
["ActualizarVenta", "Actualizar Venta"]]

const NavbarMenu = (props) => {


    let history = useHistory();
    let location = useLocation()
    let userData = props.user
    let clearData = props.clear

    var pathPos = location.pathname.split("/")[2]

    if (userData) {
        var rol = userData.uRol
        var items;
        var menu = "Home";
    }

    const AccountLogout = () => {
        clearData()
        cookie.remove('userData')
        sessionStorage.removeItem('isSignedIn')
        history.replace("/")
    }

    const handleOptions = (route) => {
        history.push(`/${rol}/${route}`)
    }

    if (rol === "Administrador") {
        items =
            admin.map((element, index) => (
                <NavDropdown.Item key={index}
                    active={(element[0] === pathPos)}
                    eventKey={element[0]}
                >{element[1]}</NavDropdown.Item>
            )
            )
        admin.map((element) => {
            if (element[0] === pathPos) {
                menu = element[1]
            }
        }
        )
    } else if (rol === "Vendedor") {
        items =
            vendor.map((element, index) => (
                <NavDropdown.Item key={index}
                    active={(element[0] === pathPos)}
                    eventKey={element[0]}
                >{element[1]}</NavDropdown.Item>
            )
            )
        vendor.map((element) => {
            if (element[0] === pathPos) {
                menu = element[1]
            }
        }
        )
    }

    /* 
    <NavDropdown.Item eventKey="1" >Action</NavDropdown.Item>
    */
    return (
        <>
            {(userData && location.pathname !== "/") ? (
                <Navbar bg="dark" variant="dark">
                    <Container style={{ display: "flex", flexDirection: "row", minWidth: "100%", maxHeight: "60px" }} >
                        <Navbar.Brand>{rol}</Navbar.Brand>
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={menu}
                                menuVariant="dark"
                                onSelect={handleOptions}
                            >
                                {items}
                            </NavDropdown>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end" style={{ gap: "10px" }} >
                            <Navbar.Text >
                                Bienvenido: <a href="#login" >{userData.uFirstName} {userData.uLastName}
                                    <span><img style={{ borderRadius: "35px", maxWidth: "40px", marginLeft: "10px" }} src={userData.uImageUrl} ></img></span>
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
            ) : (
                null
            )}

        </>
    )
}

export default NavbarMenu;
/*
       optionRol =
            <Nav className="me-auto">
                <Link to={`/${rol}/RegistrarVenta`} className="nav-link">
                    <Nav>Registrar Venta</Nav>
                </Link>
                <Link to={`/${rol}/ActualizarVenta`} className="nav-link">
                    <Nav>Actualizar Venta</Nav>
                </Link>
            </Nav>
*/