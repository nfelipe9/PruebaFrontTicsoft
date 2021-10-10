import React, { useState, useEffect } from 'react'
import { GoogleLogin, useGoogleLogin, useGoogleLogout, } from 'react-google-login'
import { useHistory,useLocation } from 'react-router';




const LoginBoton = () => {

    const [userData, setUserData] = useState({})

    let history = useHistory()
    let location = useLocation()

    const SigninWithGoogle = (responseGoogle) => {
        //console.log(responseGoogle)
        //console.log(responseGoogle.isSignedIn())
        //console.log(responseGoogle.profileObj)
        let user = responseGoogle.profileObj
        user.isSignedIn = responseGoogle.isSignedIn();
        setUserData({ user })
        localStorage.setItem("actualUser", JSON.stringify(user))
        //console.log(userData)
        history.push(`/Administrador/${user.email}`)
    };

    useEffect(() => {
        console.log(userData)
        if (userData !== {}) {
            if (userData.isSignedIn === false) {
                setUserData({})
                console.log(userData)
            }
        }
    }, [])

    return (

        <GoogleLogin className="google"
            clientId="665251628146-6lukt5lfm6afau043mjmicurun28cnmv.apps.googleusercontent.com"
            onSuccess={SigninWithGoogle}
            isSignedIn={true}
            theme="dark"
            cookiePolicy={"single_host_origin"}
        />
    );
};

export default LoginBoton;
