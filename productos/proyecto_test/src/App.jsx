import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
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
  const history = useHistory()
  
  let sessionState = sessionStorage.getItem('isSignedIn')
  //const location = useLocation()

  const [userSigned, setUserSigned] = useState(sessionState? (cookie.get('userData')):(null))
  //const [SignedIn, setSignedIn] = useState(sessionState)

  const assign = (data) => {
    setUserSigned(data)
  }

  const clearData = () => {
    setUserSigned()
  }

  useEffect(() => {
    if (!sessionState) {
      cookie.remove('userData')
    }
  },)

  return (
    <>
      <Router>
        <NavbarMenu user={userSigned} clear={clearData} ></NavbarMenu>
        <Switch>
          <Route exact path="/" render={() => <LoginPage userInfo={assign} info={history} />} />
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
