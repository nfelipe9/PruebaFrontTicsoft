import React from 'react'

import Containers from './container';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavbarAdmin () {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Administrador</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Bienvenido: <a href="#login">@Username</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

function NavbarVendor () {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Vendedor</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Bienvenido: <a href="#login">@Username</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

function NavbarGuest () {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Invitado</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Bienvenido: <a href="#login">@Username</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (
            <>
        <NavbarVendor/> 
        <Containers/>
            </>
        )
    }
    return (
    <>
    <NavbarGuest />
    </>
    )
}

export default Greeting;
