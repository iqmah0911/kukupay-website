import React from 'react';
import kukupayLogo from '../img/kukupay.svg';
import "../../src/styles.css";
import "../../src/responsive.css";
import "../../src/Navigation-with-Button.css";
import "../../src/Navigation-Clean.css";
import "../../src/Footer-Dark.css";
import "../../src/Contact-Form-Clean.css";
import "../../src/Clients.css";
import { Link } from "react-router-dom";




const Nav = () => {
    return (
        <div id="mainheader">
            <nav className="navbar navbar-light navbar-expand-lg navigation-clean fixed-top" style={{ zIndex: 1000 }}>
                <div className="container"><a className="navbar-brand" href="#"><img src={kukupayLogo} alt='kukulogo' /></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/product">Product</Link></li>

                            <li className="nav-item"><Link className="nav-link" to='/about'>About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Nav;