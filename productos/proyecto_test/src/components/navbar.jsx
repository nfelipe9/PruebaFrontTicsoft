import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export function navbar() {
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
