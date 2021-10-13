import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { GoogleLogin, useGoogleLogin } from 'react-google-login'
import Cookies, { Cookie } from 'universal-cookie'
import ReactDOM from 'react-dom';
import '../cssStyles/loginStyle/loginStyles.css'
import LogoPng from '../assets/LoginImagen/Logo.png'
import UserLarge from '../assets/LoginImagen/Login_icono_usuario_grande.png'
import UserTiny from '../assets/LoginImagen/Login_icono_usuario_pequeño.png'
import UserPass from '../assets/LoginImagen/Login_icono_contraseña.png'
import BackImage from './BackImage'

const cookie = new Cookies();

const useSessionStorage = key => {
    const initialValue = sessionStorage.getItem(key)
    const [persistedValue, setPersistedValue] = useState(
        initialValue ? JSON.parse(initialValue) : initialValue
    )

    const setValue = newValue => {
        setPersistedValue(newValue)
        sessionStorage.setItem(key, JSON.stringify(newValue))
    }

    return [persistedValue, setValue]
}

const LoginForm = (props) => {

    const [persistedValue, setValue] = useSessionStorage("-1")

    const [rol, setRol] = useState(persistedValue || "-1")

    const LoginBoton = () => {
        
        let history = useHistory()
        
        const SigninWithGoogle = (responseGoogle) => {
            //console.log(responseGoogle.isSignedIn())
            //console.log(responseGoogle.profileObj)
            let user = responseGoogle.profileObj
            props.userInfo(user)
            cookie.set('userData',user)
            //localStorage.setItem("actualUser", JSON.stringify(user))
            history.push(`/${rol}`)
        };

        const SigninFailure = ()=>{
            //setIsLoggedIn(false) adaptar esto de alguna forma
            let s=5
        }

        return (
            <>
                <GoogleLogin className="google"
                    clientId="665251628146-6lukt5lfm6afau043mjmicurun28cnmv.apps.googleusercontent.com"
                    onSuccess={SigninWithGoogle}
                    isSignedIn={true}
                    theme="dark"
                    cookiePolicy={"single_host_origin"}
                />
            </>
        )
    }

    useEffect(() => {
        setValue(rol)
    }, [rol])

    return (
        <>
            <BackImage></BackImage>
            <div style={{ width: "350px", right: "20%" }} >
                <div className="boxContainer" style={{ width: "350px", marginTop: "5%", right: "10%", position: "fixed" }} >
                    <img className="img_user" src={UserLarge} alt="user_large" />
                    <div>
                        <select className="selector" value={rol} onChange={(e) => { setRol(e.target.value) }} >
                            <option disabled value="-1" >Elija rol de Usuario</option>
                            <option value="Administrador" >Administrador</option>
                            <option value="Vendedor" >Vendedor </option>

                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="in_line">
                            <span className="input-group-text">
                                <img className="icon" src={UserTiny} alt="user_tiny" />
                            </span>
                            <input className="form-control" type={"text"} placeholder="ID Usuario" />
                        </div>
                        <div className="in_line">
                            <span className="input-group-text">
                                <img className="icon" src={UserPass} alt="pass" />
                            </span>
                            <input className="form-control" type={"password"} placeholder="Contraseña" />
                        </div>
                    </div>
                    <button className="log_button"><span>Ingresar</span></button>
                    <div style={{ width: "100%" }}>
                        <div>
                            <hr style={{ float: "left", color: "white", width: "40%" }} />
                        </div>
                        <div style={{ float: "left", paddingLeft: "9%", color: "white" }}>
                            o
                        </div>
                        <div>
                            <hr style={{ float: "right", color: "white", width: "40%" }} />
                        </div>
                    </div>
                    <LoginBoton></LoginBoton>
                </div>
            </div>
        </>
    )
}

export default LoginForm
