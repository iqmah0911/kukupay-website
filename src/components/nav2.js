import React from 'react'
import kukupayStaticLogo from '../img/logostatic.svg';
import "../../src/styles.css";
import "../../src/responsive.css";
import "../../src/Navigation-with-Button.css";
import "../../src/Navigation-Clean.css";
import "../../src/Footer-Dark.css";
import "../../src/Contact-Form-Clean.css";
import "../../src/Clients.css";
import { NavLink } from "react-router-dom";

const Nav2 = () => {
    return (
        <div id="mainheader_static">
            <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button fixed-top">
                <div className="container"><a className="navbar-brand" href="#"><img src={kukupayStaticLogo} alt='kukuStaticLogo' /></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><NavLink className="nav-link" exact activeClassName='active'  to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link"  activeClassName='active'  to="/product">Product</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName='active'  to='/about'>About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName='active'  Nav to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav2;