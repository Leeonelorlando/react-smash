import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/SMASHED BABIES LOGO 2.png";

const NavBar = () => {
    return (
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="100" alt="Smashed Babies" /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/category/id"}>Pedí tu Smash Burger</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/menu"}>Menú</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;