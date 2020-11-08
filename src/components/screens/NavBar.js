import React from "react";
import { slide as Menu } from "react-burger-menu";
import './NavBar.css';
<<<<<<< HEAD:src/components/Screens/NavBar.js
import {Link} from "react-router-dom";
=======
import Logo from "../layouts/images/icon.svg";
>>>>>>> 3f84942a87b2ac06e6f145edf31d356701e90684:src/components/screens/NavBar.js

export default props => {
  return (
    <Menu {...props}>
      <span>
      <img src = {Logo} height="40px" width="40px" alt="logo"></img>
      <span id="icon">Trillio.</span>
      </span>
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