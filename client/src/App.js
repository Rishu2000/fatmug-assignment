import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Register from './forms/Register'
import Login from './forms/Login'

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/">
        <h1>Home</h1>
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
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
