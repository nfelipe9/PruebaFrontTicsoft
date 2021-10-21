import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Cookies from 'universal-cookie'

import MainRoutes from './components/routes/mainRoutes'
import LoginPage from './components/loginPrincipal/LoginPage';
import DeniedPage from './components/DeniedAccess'
import NavbarMenu from './components/MainMenu';
/*

*/
const cookie = new Cookies();

const App = () => {
  
  const sessionState = sessionStorage.getItem('isSignedIn')
  //const location = useLocation()

  const [userSigned, setUserSigned] = useState(sessionState? (cookie.get('userData')):(null))
  //const [SignedIn, setSignedIn] = useState(sessionState)

  const assign = (data) => {
    setUserSigned(data)
  }

  const clearData = () => {
    setUserSigned()
  }

  console.log(sessionState)

  useEffect(() => {
    if (!sessionState) {
      cookie.remove('userData')
    }
  },[sessionState])

  return (
    <>
      <Router>
        <NavbarMenu user={userSigned} clear={clearData} ></NavbarMenu>
        <Switch>
          <Route exact path="/" render={() => <LoginPage userInfo={assign}/>} />
          {!userSigned ? (
            <Route path="*" component={DeniedPage} />
          ) : (
            <MainRoutes user={userSigned} />
          )
          }
        </Switch>
      </Router>
    </>
  );
}

export default App;
