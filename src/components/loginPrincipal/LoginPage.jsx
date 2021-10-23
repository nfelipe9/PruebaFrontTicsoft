import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import Cookies from 'universal-cookie'
import '../cssStyles/loginStyle/loginStyles.css'
import UserLarge from '../assets/LoginImagen/Login_icono_usuario_grande.png'
import UserTiny from '../assets/LoginImagen/Login_icono_usuario_pequeño.png'
import UserPass from '../assets/LoginImagen/Login_icono_contraseña.png'
import BackImage from './BackImage'
import RegisterModal from './RegisterModal'

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

const Users = function (id, firstname, lastname, email, password, rol, imageUrl) {
    this.uId = id;
    this.uFirstName = firstname;
    this.uLastName = lastname;
    this.uEmail = email;
    this.uPassword = password;
    this.uRol = rol;
    this.uImageUrl = imageUrl
}

const LoginPage = (props) => {

    const [persistedValue, setValue] = useSessionStorage(false)
    const [signed, setSigned] = useState(persistedValue || false)

    const [showModal, setShowModal] = useState(false)
    const [profileRegister, setProfileRegister] = useState()
    const [messageText, setMessageText] = useState(-1) // valor 0 para ventana registro - valor 1 para ventana registro correcto
    // valor 2 para usuario no autorizado
    // mensajes manuales para errores
    const [rol, setRol] = useState("-1")

    const LoginBoton = () => {

        let history = useHistory()

        const SigninWithGoogle = (responseGoogle) => {
            let resStatus = 200
            let email = responseGoogle.profileObj.email
            //console.log(responseGoogle.isSignedIn())
            fetch(`http://localhost:8080/api/users/${email}`, { method: "get" })
                .then(res => {
                    resStatus = res.status
                    console.log(resStatus)
                    //throw Error('Currently the server is down, please contact with your provider.')
                    return res.json()
                })
                .then((datajson) => {
                    if (datajson.message) {
                        throw new Error(datajson.message)
                    }
                    var user = new Users(
                        datajson.Id,
                        datajson.FirstName,
                        datajson.LastName,
                        datajson.Email,
                        datajson.Password,
                        datajson.Rol,
                        datajson.ImageUrl
                    )
                    if (user.uRol === "Unauthorized") {
                        setMessageText(2)
                        setSigned(false)
                        handleShow()
                    } else {
                        setSigned(true)
                        cookie.set('userData', user)
                        sessionStorage.setItem('isSignedIn', signed)
                        props.userInfo(user)
                        history.push(`${user.uRol}/`)
                    }
                })
                .catch((err) => {
                    if (resStatus === 404) {
                        setProfileRegister(responseGoogle.profileObj)
                        //window.alert("Error : " + err.message)
                        setMessageText(0)
                    } else if (resStatus === 500) {
                        setMessageText(`Error ${resStatus}:` + err.message)
                    } else {
                        setMessageText('Currently the server is down, please contact with your provider.')
                    }
                    setSigned(false)
                    handleShow()
                })
        };

        const SigninFailure = (responseGoogle) => {
            //setIsLoggedIn(false) adaptar esto de alguna forma
            window.alert("error algo")
        }

        return (
            <>
                <GoogleLogin className="google"
                    clientId="665251628146-6lukt5lfm6afau043mjmicurun28cnmv.apps.googleusercontent.com"
                    onSuccess={SigninWithGoogle}
                    onFailure={SigninFailure}
                    isSignedIn={signed}
                    theme="dark"
                    cookiePolicy={"single_host_origin"}
                />
            </>
        )
    }

    const registerUser = () => {
        let resStatus = 200

        fetch(`http://localhost:8080/api/users`,
            {
                method: "post",
                headers: {
                    'Content-Type': "application/json",
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    givenName: profileRegister.givenName,
                    familyName: profileRegister.familyName,
                    email: profileRegister.email,
                    imageUrl: profileRegister.imageUrl,
                })
            }
        )
            .then(res => {
                resStatus = res.status
                //throw Error('Currently the server is down, please check with your provider')
                return res.json()
            })
            .then((datajson) => {
                if (datajson.message) {
                    throw new Error(datajson.message)
                }
                handleClose()
                setProfileRegister()
                setMessageText(1)
                handleShow()
            })
            .catch((err) => {
                if (400 < resStatus < 600) {
                    //window.alert("Error : " + err.message)
                    setMessageText(`Error ${resStatus}:` + err.message)
                    handleShow()
                } else {
                    setMessageText(err.message)
                    handleShow()
                }
            })

    }

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        /*if (signed === false){
            cookie.remove('userData')
        }*/
        if (sessionStorage.getItem('isSignedIn')) {
            setValue(signed)
        } else {
            setValue(false)
        }
    })

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
            <RegisterModal openModal={showModal} closeModal={handleClose} register={registerUser} message={messageText} ></RegisterModal>
        </>
    )
}

export default LoginPage
