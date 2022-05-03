import React from 'react';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import contact from '../img/contact.png';
import "../../src/styles.css";
import "../../src/responsive.css";
import "../../src/Navigation-with-Button.css";
import "../../src/Navigation-Clean.css";
import "../../src/Footer-Dark.css";
import "../../src/Contact-Form-Clean.css";
import "../../src/Clients.css";


const Contact = () => {
    return (

        <div>
            <div id="mainheader_static">
                <Nav2 />
            </div>

            <section className="contact-box">
                <div className="container">
                    <div className="row">
                            <div className="col-md-6">
                                    <h3 style={{marginTop: '5%'}}> Get in touch <br/>with us today</h3>
                                    <p><i className="fas fa-home"></i>&nbsp;32, Lalubu 51, Oke llewo. Box 2055 <br/>Lagos, Nigeria.</p>
                                    <p><i className="fas fa-phone-square-alt"></i>&nbsp;+2381 3596 2940</p>
                                    <p><i className="fas fa-envelope"></i>&nbsp;Kukupay@gmail.com</p>
                                    <p className="text-start d-none d-sm-block" ><img src={contact} style={{width: '80%'}}/></p>

                            </div>

                            <div className="col-md-6">
                                    <section className="contact-clean">
                                        <h4 className="text-start" style={{marginBottom: '5%'}}>Contact Form</h4>
                                        <form method="post">
                                            <p className="text-start">Please let us know how we be of help with any info<br/>Fill the form and we'll get back to you.</p>
                                            <div className="mb-3"><input className="form-control is-invalid" type="email" name="email" placeholder="Email"/></div>
                                            <div className="mb-3"></div>
                                            <div className="mb-3"><input className="form-control" type="text" name="name" placeholder="Name"/></div>
                                            <div className="mb-3">
                                                <div class="mb-3"><input className="form-control" type="text" name="telephone" placeholder="Telephone"/></div><textarea className="form-control" name="message" placeholder="Message" rows="14"></textarea>
                                            </div>
                                            <div className="mb-3"><button className="btn btn-primary" type="submit">send MESSAGE</button></div>
                                        </form>
                                    </section>
                            </div>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    );

};

export default Contact;