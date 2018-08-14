import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const About =() =>{
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

const Navbar = () =>{
  return(
  <div>
    <NavLink to ="/" exact style={link} activeStyle={{ background: 'darkblue'}}>Home</NavLink>
    <NavLink to ="/about" exact style={link} activeStyle={{ background: 'darkblue'}}>About</NavLink>
    <NavLink to ="/login" exact style={link} activeStyle={{ background: 'darkblue'}}>Login</NavLink>
  </div>
  )
}
const Login = () =>{
  return(
    <from>
      <div>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login" />
    </from>
  );

};

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path='/' component={Home} />
      <Route exact path="/about" render={About}/>
      <Route exact path="/login" render={Login}/>
    </React.Fragment>
</Router>),
  document.getElementById('root')
);
