import React from 'react'
import logo from '../assets/images/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="logo  me-4 ms-5"  src={logo} alt=""></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <a className="nav-link active " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-5 ">
                                <a className="nav-link" href="#">Advance search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-primary me-4" type="submit">Login</button>
                            <button className="btn btn-primary" type="submit">Signup</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
}

