import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css';

const NavComponent = () => 
    { return ( 
    <nav className="nav-bar"> 
    <NavLink exact to="/" activeClassName="active-link">Home</NavLink> 
    <NavLink to="/todoapp" activeClassName="active-link">TodoApp</NavLink>  
    <NavLink to="/pokepage" activeClassName="active-link">PokePage</NavLink></nav> 
    ); 
};
  
  export default NavComponent;
