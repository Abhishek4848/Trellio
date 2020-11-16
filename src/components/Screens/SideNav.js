import React from "react";
import { slide as Menu } from "react-burger-menu";
import './SideNav.css';
import {Link} from "react-router-dom";
import {useContext} from 'react'
import {authContext} from "../../context/auth-context"

export default props => {
  const auth = useContext(authContext)
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        My Profile
      </a>
      <Link to ="/Learn" className="menu-item">
        Learn Tech
      </Link>
      {auth.isLoggedIn && (
        <Link to = "/POSTS" className ="right">Start new Project</Link>
      )}
      {auth.isLoggedIn && (
        <Link to = "/Myprojects" className ="right">My Projects</Link>
      )}
      {auth.isLoggedIn && (
        <Link to = "/" className ="right" onClick = {() => auth.logout()}>
        <span className="btn">
        <button className="logout"><span>Logout</span></button>
        </span>
        </Link>
    )}
    </Menu>
  );
};
