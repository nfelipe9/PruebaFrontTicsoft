import React, { Component, useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  BrowserRouterProps
} from "react-router-dom";
import Cookies, { Cookie} from 'universal-cookie'

import LoginBoton from './components/loginPrincipal/LoginBoton'
import MainRoutes from './components/routes/mainRoutes'
import LoginForm from './components/loginPrincipal/LoginForm';


/*

*/
const cookie = new Cookies();

const App = () => {

  const history = useHistory()

  const [userSigned, setUserSigned] = useState(cookie.get('userData'))
  const [userRol, setUserRol]= useState("")

  const assign = (data)=>{
    setUserSigned(data)
  }

  const clearData = ()=>{
    setUserSigned({})
  }

  //console.log(userSigned)
 useEffect(() => {
   setUserSigned(cookie.get('userData'))
 }, [])

 console.log(history)

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <LoginForm userInfo={assign} info={history} />} ></Route>
          <MainRoutes user={userSigned} clear={clearData}></MainRoutes>
        </Switch>
      </Router>
    </>
  );
}

export default App;
/*{ 
  !userSigned ?(
    <h1>hola</h1>
  ):(
    <Route exact path="/" component={LoginForm} children={LoginForm(assign)} ></Route>
  )
}*/