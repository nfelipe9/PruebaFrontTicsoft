import React from 'react'
import ReactDom from 'react-dom'
import { withRouter } from 'react-router-dom'
import '../cssStyles/loginStyle/loginStyles.css'
import LoginForm from './LoginForm'
import BackImage from './BackImage'

const LoginPage = () => {


    return (
        <>
            <BackImage></BackImage>
            <LoginForm  ></LoginForm>
        </>
    )
};

export default LoginPage;
