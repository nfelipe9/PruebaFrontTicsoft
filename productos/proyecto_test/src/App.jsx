import React, { Component, useState, useEffect } from 'react';
import { GoogleLogin, useGoogleLogin, useGoogleLogout, } from 'react-google-login'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";



import LoginPage from './components/loginPrincipal/LoginPagina'
import LoginBoton from './components/loginPrincipal/LoginBoton'
import MainRoutes from './components/routes/mainRoutes'
import { render } from 'react-dom';
/*

*/

const App = () => {

  const history = useHistory()
  //const [userSigned, setUserSigned] = useState(JSON.parse(localStorage.getItem("actualUser")).isSignedIn)

  /*const session = () => {
    setUserSigned(true)
  }*/

  return (
    <>
      <Router history={history} >
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <MainRoutes />
        </Switch>
      </Router>
    </>
  );
}

export default App;