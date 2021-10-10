import React, { useEffect, useState } from 'react'

import './cssStyles/general/Css.css'


import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import { GoogleLogout } from 'react-google-login'
import { Redirect, useHistory,useParams } from 'react-router-dom';


function NavbarMenu() {

    const history = useHistory();
    const {params} = useParams();

    const [user, setUser] = useState({})

    const visualizarUsuario = (checkUser) => {
        console.log(checkUser)
        console.log(history.location)

    }

    const AccountLogout = () => {
        localStorage.removeItem("actualUser")
        setUser(user.isSignedIn=false)
        console.log(user)
        history.replace("/")
    }

    useEffect(() => {
        let checkUser = JSON.parse(localStorage.getItem("actualUser"))
        setUser(checkUser)
        visualizarUsuario(checkUser)
        
    }, [])

    /*<Button onClick={() => { visualizarUsuario() }} >hola</Button>
    */
    return (
        <Navbar bg="dark" variant="dark" >
            <Container style={{ display:"flex",flexDirection:"row", minWidth:"100%", maxHeight:"60px"}} >
                <Navbar.Brand href="#home">Administrador</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" style={{gap:"10px"}} >
                    <Navbar.Text >
                        Bienvenido: <a href="#login" >{user.name} 
                        <span><img style={{borderRadius:"40px",maxWidth:"40px", marginLeft:"10px" }} src={user.imageUrl} ></img></span> 
                        </a>
                    </Navbar.Text>
                    <GoogleLogout 
                        clientId="665251628146-6lukt5lfm6afau043mjmicurun28cnmv.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={AccountLogout}
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu;