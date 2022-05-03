import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Banner from '../img/bannerbg.png';
import Mobile from '../img/mobile-banking1.png';
import Customer from '../img/customer-feedback 1.png';
import Global from '../img/contentimg1.png';
import Global1 from '../img/contentimg2.png';
import User from '../img/users.png';
import Evanto from '../img/envato.jpg';
import Design from '../img/designmodo.jpg';
import Theme from '../img/themeforest.jpg';
import Mark from '../img/creative-market.jpg';

///styles///

import "../../src/styles.css";
import "../../src/responsive.css";
import "../../src/Navigation-with-Button.css";
import "../../src/Navigation-Clean.css";
import "../../src/Footer-Dark.css";
import "../../src/Contact-Form-Clean.css";
import "../../src/Clients.css";



const Home = () => {
    return (
        <div>
            <div id='mainheader'>
                <Nav />
                <div className="container" style={{paddingTop:'8%'}}>
                        <h1>Digital platform that helps you make payment easy and fast.</h1>
                        <p className="text-center"><img className="bannerimg"   src={Banner} alt='bannerimg' /></p>
                </div> 
            </div>

            <div className="container">
                <div className="card-group group-csx">
                    <div className="card">
                        <div className="card-body" style={{textAlign: 'center'}}>
                            <p style={{textAlign: 'center'}}><img src={Mobile} /></p>
                            <h4 className="text-center card-title">Banking as a service</h4>
                            <p className="card-text" style={{textAlign: 'center'}}>Kukupay is a digital lending solution designed to provide bridge finance with the right tools to manage businesses. </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" style={{textAlign: 'center'}}>
                            <p style={{textAlign: 'center'}}><img src={Customer} /></p>
                            <h4 className="text-center card-title">Interbank infratructure</h4>
                            <p className="card-text" style={{textAlign: 'center'}}>Kukupay is a top-level banking agency, where interbank transactions through electronic brokering is safe, smart, fast and reliable.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" style={{textAlign: 'center'}}>
                            <p style={{textAlign: 'center'}}><img src={Customer} /></p>
                            <h4 className="text-center card-title">End-user payment</h4>
                            <p className="card-text">At kukupay, a customer of our financial institutions provides payment instruments and services to facilitates the completion of transactions.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="homecontent">
                <div className="container">
                    <div className="row" style={{margin:'0px', padding:'0px'}}>
                        <div className="w-100 d-sm-block d-md-none d-lg-none d-xl-none"></div>
                        <div className="col" style={{padding:'0px'}}>
                            <div className="card cccard">
                                <div className="card-body card-bodycontent" style={{height:'50vh'}}>
                                    <h6 className="text-muted card-subtitle mb-2">Business statistics</h6>
                                    <h3 className="card-title">Building the next fast and <br />easy payment platform</h3>
                                    <p className="card-text homecontenttext">To provide excellent financial services to a large segment of the public using a highly skilled and motivated management information system, thereby ensuring superior returns to shareholders.    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5" style={{padding:'0px'}}>
                            <div style={{backgroundImage:`url(${Global})`,height:'50vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></div>
                        </div>
                    </div>
                    <div className="row" style={{margin:'0px',padding:'0px', marginTop:'5%'}}>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5" style={{padding:'0px'}}>
                            <div className="d-none d-sm-block" style={{backgroundImage:`url(${Global1})`,height:'50vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></div>
                        </div>
                        <div className="w-100 d-sm-block d-md-none d-lg-none d-xl-none"></div>
                        <div className="col" style={{padding:'0px'}}>
                            <div className="card cccard">
                                <div className="card-body" style={{height:'50vh', padding: '5% 0% 5% 10%'}}>
                                    <h6 className="text-muted card-subtitle mb-2">Core Value</h6>
                                    <h3 className="card-title">Kukupay, <br/>we are guided by 6 values; </h3>
                                    <p className="card-text homecontenttext">
                                        <ul>
                                            <li>Passion</li>
                                            <li>Empathy</li>
                                            <li>grit</li>
                                            <li>curiosity</li>
                                            <li>professionalism</li>
                                            <li>Honestly</li>
                                    </ul></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            <section className="testimony">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-lg-7">
                            <div className="text-center">
                                <p><img src={User} style={{width:'100px'}}/></p>
                                <p className="testtext">Kukupay exemplify excellence with world-class<br />technology built for africa by aftrica</p>
                                <p style={{color:'#ccc'}}>KukuPay&nbsp; empowers businesses in the formal &amp; informal sectors with the right tools &amp; solutions to manage their finances and grow their businesses. </p>
                                <p style={{color:'#ccc'}}>ONYEKA BLESSING<br />Ed business developer Nigeria</p>
                            </div>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </section>

            <section className="client-section">
                <div className="container">
                    <h5 className="text-center">Trusted client</h5>
                </div>
                <aside id="section-clients" className="clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3"><a href="#"> <img class="img-fluid" src={Evanto}/></a></div>
                            <div className="col-sm-6 col-md-3"><a href="#"> <img class="img-fluid" src={Design}/></a></div>
                            <div className="col-sm-6 col-md-3"><a href="#"> <img class="img-fluid" src={Theme}/></a></div>
                            <div className="col-sm-6 col-md-3"><a href="#"> <img class="img-fluid" src={Mark}/></a></div>
                        </div>
                    </div>
                </aside>
            </section>

            <Footer />
        </div>
        
        );
  };
  
  export default Home;