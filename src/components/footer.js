import React from 'react';
import "../../src/styles.css";
import "../../src/responsive.css";
import "../../src/Navigation-with-Button.css";
import "../../src/Navigation-Clean.css";
import "../../src/Footer-Dark.css";
import "../../src/Contact-Form-Clean.css";
import "../../src/Clients.css";
import kukupay from '../img/kukupay.svg';


const Footer = () => {
    return(
        <div>
                <footer className="footer-dark">
                    <div className="container">
                        <p><img src={kukupay} /></p>
                        <hr />
                        <div className="row" style={{marginTop:'30px'}}>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>OUR PRODUCTS</h3>
                                <ul>
                                    <li><a href="#">KukuPay App</a></li>
                                    <li><a href="#">KukuMoney</a></li>
                                    <li><a href="#">SendTransfer</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>SITE LINK</h3>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Culture</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>INFORMATION</h3>
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 item text">
                                <h3>CONTACT</h3>
                                <p>32, Ikeja Road 51, Oke llewo. Box&nbsp;<br />Lagos, Nigeria.<br /><br />Email: info@kukupay.ng<br />Telephone: 080--------</p>
                            </div>
                            <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                        </div>
                        <p className="copyright">KukuPay © 2022</p>
                    </div>
                </footer>

        </div>
        
        

    )
}

export default Footer;



