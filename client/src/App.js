import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Register from './forms/Register'
import Login from './forms/Login'
import LandingPage from './pages/LandingPage'

function App() {

  const [auth, setAuth] = useState(false);
  const [loginFunRun, setLoginFunRun] = useState(false);
  const [regError, setRegError] = useState(false);
  const [userName, setUserName] = useState('');

  return (
  <Router>
    <Switch>
      <Route path="/register">
        <Register setAuth={setAuth} setRegError={setRegError} setUserName={setUserName}/>
      </Route>
      <Route path="/login">
        <Login auth={auth} setAuth={setAuth} setLoginFunRun={setLoginFunRun} setUserName={setUserName}/>
      </Route>
      <Route path="/">
        {auth?(
          <LandingPage userName={userName} setAuth={setAuth} setLoginFunRun={setLoginFunRun}/>
        ):
        (
        <div>
          <h1>Home</h1>
          {(
            loginFunRun && (
              <h4 style={{color: 'red'}}>User Not Found, Please Register if you are a new user.</h4>
          )) || (
            regError && (
              <h4 style={{color: 'red'}}>Email is already registered, Please Login.</h4>
            )
          )}
          <button style={{fontSize:35,padding:"0 10px", margin:"0 10px"}}>
            <Link to="/login" style={{textDecoration: "none"}}>
              Login
            </Link>
          </button>
          <button style={{fontSize:35,padding:"0 10px", margin:"0 10px"}}>
            <Link to="/register" style={{textDecoration:"none"}}>
              Register
            </Link>
          </button>
        </div>
        )}
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
