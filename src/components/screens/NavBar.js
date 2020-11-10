import React from "react";
import { slide as Menu } from "react-burger-menu";
import './NavBar.css';
import {Link} from "react-router-dom";

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        My Profile
      </a>
      <Link to ="/src/components/Screens/CreateNewProj" className="menu-item">
        Start New Project
      </Link>
      <a className="menu-item" href="/">
        View Existing Projects
      </a>
      <a className="menu-item" href="/">
        Search Projects
      </a>
      <Link to ="/">
      <span className="btn">
      <button className="logout"><span>Logout</span></button>
      </span>
      </Link>
    </Menu>
  );
};