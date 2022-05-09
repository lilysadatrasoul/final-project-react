import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/user/Home">
                        <img className="logo  me-4 ms-5" src={logo} alt=""></img>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <Link className="nav-link active "  to="/user/Home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item me-5 ">
                                <Link className="nav-link" to="/user/AdSearch">
                                    Advance search
                                </Link>
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-link" to="/user/About">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex button">
                             <Link className="nav-link" to="/login">
                                    <button className="btn btn-primary me-4" type="submit">
                                       Login
                                   </button>
                             </Link>
                             <Link className="nav-link" to="/Singup">
                                    <button className="btn btn-primary me-4" type="submit">
                                    Signup
                                   </button>
                             </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
