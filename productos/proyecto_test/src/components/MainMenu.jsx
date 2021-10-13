import React, { useEffect, useState } from 'react'

import './cssStyles/general/Css.css'
import './cssStyles/loginStyle/loginStyles.css'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import { GoogleLogout } from 'react-google-login'
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Cookies, { Cookie} from 'universal-cookie'

const cookie = new Cookies();

const NavbarMenu = (props) => {

    let history = useHistory();
    let { params } = useParams();
    let userData = props.user
    let clearData = props.clear

    const AccountLogout = () => {
        //localStorage.removeItem("actualUser")
        //console.log(user)
        clearData()
        cookie.remove('userData')
        history.replace("/")
    }
    console.log(cookie.get('userData'))

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container style={{ display: "flex", flexDirection: "row", minWidth: "100%", maxHeight: "60px" }} >
                    <Navbar.Brand href="#home">Administrador</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" style={{ gap: "10px" }} >
                        <Navbar.Text >
                            Bienvenido: <a href="#login" >{userData.name}
                                <span><img style={{borderRadius:"35px",maxWidth:"40px", marginLeft:"10px" }} src={userData.imageUrl} ></img></span>
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
        </>
    )
}

export default NavbarMenu;