import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css';

const NavComponent = () => 
    { return ( 
    <nav className="nav-bar"> 
    <NavLink exact to="/" activeClassName="active-link">Home</NavLink> 
    <NavLink to="/about" activeClassName="active-link">About</NavLink> 
    <NavLink to="/login" activeClassName="active-link">Login</NavLink> </nav> 
    ); 
};
  
  export default NavComponent;
