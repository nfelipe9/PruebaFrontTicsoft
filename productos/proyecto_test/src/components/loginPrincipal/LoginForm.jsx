import React from 'react'
import ReactDOM from 'react-dom';
import '../cssStyles/loginStyle/loginStyles.css'
import LogoPng from '../assets/LoginImagen/Logo.png'
import UserLarge from '../assets/LoginImagen/Login_icono_usuario_grande.png'
import UserTiny from '../assets/LoginImagen/Login_icono_usuario_pequeño.png'
import UserPass from '../assets/LoginImagen/Login_icono_contraseña.png'
import LoginBoton from './LoginBoton'


const LoginForm = () => {
    return (
        <div style={{ width: "350px", right: "20%" }} >
            <div className="boxContainer" style={{ width: "350px", marginTop: "5%", right:"10%", position:"fixed"}} >
                <img className="img_user" src={UserLarge} alt="user_large" />
                <div>
                    <select className="selector">
                        <option disabled defaultValue >Elija rol de Usuario</option>
                        <option>Administrador</option>
                        <option>Vendedor</option>

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
                <LoginBoton  ></LoginBoton>
            </div>
        </div>


    )
}

export default LoginForm
