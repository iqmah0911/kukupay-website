import React from 'react'
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import PosLogo from '../img/productimg1.png';
import AgentLogo1 from '../img/c1c.png';
import AgentLogo2 from '../img/c2c.png';
import AgentLogo3 from '../img/c3c.png';
import AgentLogo4 from '../img/c4c.png';
import AgentLogo5 from '../img/c5c.png';
import AgentLogo6 from '../img/seller.png';

////styles//

import "../../src/styles.css";
import "../../src/responsive.css";
import "../../src/Navigation-with-Button.css";
import "../../src/Navigation-Clean.css";
import "../../src/Footer-Dark.css";
import "../../src/Contact-Form-Clean.css";
import "../../src/Clients.css";


const Product = () => {
    return (
        <div>
            <div id="mainheader_static">
                <Nav2 />
                <div className="container">
                    <div className="row" style={{ marginTop: '15%' }}>
                        <div className="col-md-7">
                            <h1 className="text-start static-start">Digital platform that helps you make payment easy and fast.</h1>
                        </div>
                        <div className="col-md-5 text-center ">
                            <p><img className="w-100" src={PosLogo} alt='POSimg' /></p>
                        </div>
                    </div>
                </div>

            </div>

            <section className="staticpro">
                <div className="container">
                    <h1 className="text-center" style={{ color: '#0c387f', padding: '10px' }}>Upgrade your business <br />and earn more</h1>
                    <p className="text-center">Kukupay is an official service to customers in an unbanked and <br /> underbanked region to be to process financial requests through <br /> our registered agents in a simple and secured way.</p>
                    <div className="row" style={{ marginTop: '10%' }} >
                        <div className="col-md-5 ">
                            <p className="text-center"><img className="w-100" src={AgentLogo1} alt='Tradeimg' /></p>
                        </div>
                        <div className="col chexs">
                            <h6>OUR AGENTS ARE PROFITABLE</h6>
                            <h2 className="contenth2">Fair pricing,<br />Low commissions</h2>
                            <p className="homecontenttext">We give our agents the best prices and take fair commissions, </p>
                            <p className="homecontenttext">this allows them to compete favourably among other agents and still be profitable.</p>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '5%' }}>
                        <div className="col chexs chexs2">
                            <h6>WE HAVE THE BEST NETWORK</h6>
                            <h2 className="contenth2">Excellent network<br />reliability</h2>
                            <p className="homecontenttext">When you choose KuKupay, “no network” won’t be a business spoiler for you, as we have technically make sure that all our agents enjoy excellent network services. </p>
                        </div>
                        <div className="col-md-5 d-none d-sm-block">
                            <p className="text-center"><img class="w-100" src={AgentLogo2} alt='HandPOSimg' /></p>
                        </div>
                    </div>
                </div>
            </section >

            <section style={{ padding: '5% 0% 10% 0% ' }}>
                <div className="container">
                    <div className="row" style={{ marginTop: '10%' }}>
                        <div className="col-md-5">
                            <p className="text-center"><img className="w-100" src={AgentLogo3} alt='POSCardimg' /></p>
                        </div>
                        <div className="col chexs">
                            <h6>YOUR MONEY IS YOURS</h6>
                            <h2 className="contenth2">Sharp-sharp<br />Instant settlements</h2>
                            <p className="homecontenttext">We give instant settlements on our platform because we know that you would need<br /><br />access to your money the moment you make it. </p>
                            <p className="homecontenttext">this allows them to compete favourably among other agents and still be profitable.</p>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '5%' }}>
                        <div className="col chexs chexs2">
                            <h6>WE ARE ALWAYS AVAILABLE</h6>
                            <h2 className="contenth2">Great support to<br />help you</h2>
                            <p className="homecontenttext">As a KukuPay agent, whenever you have an issue you would never be alone. You can call us, WhatsApp us or email us and our support staff will swiftly resolve any issue or concern you have. Your customers don’t need to worry about failed withdrawal debits as we will automatically reverse them without them stepping into the bank</p>
                        </div>
                        <div className="col-md-5">
                            <p className="text-center"><img className="w-100" src={AgentLogo4} alt='ManContactimg' /></p>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '10%' }}>
                        <div className="col-md-5 d-none d-sm-block">
                            <p className="text-center"><img className="w-100" src={AgentLogo5} alt='LadyThumbsUPimg' /></p>
                        </div>
                        <div className="col chexs">
                            <h6>WE ARE FLEXIBLE TO YOU</h6>
                            <h2 className="contenth2">Transaction<br />Channels</h2>
                            <p className="homecontenttext">KukuPay gives you access to multiple transactions channels e.g mobile app, SmartPOS and POS. This means you have the choice to select your transaction channel and run your business based on what you are most comfortable with.</p>
                            <p className="homecontenttext">this allows them to compete favourably among other agents and still be profitable.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center basebase">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-none d-sm-block">
                            <p><img className="w-100" src={AgentLogo6} alt='Sellerimg' style={{ marginTop: '-20%' }} /></p>
                        </div>
                        <div className="col">
                            <h1 className="text-start" style={{ paddingLeft: '0px', marginTop: '15%' }}>Become a <br />Kukupoint agent</h1>
                            <h5 className="text-start" style={{ color: 'white', margin: '3% 0%' }}>Run your mobile money agent with Kukupoint <br />and make money with ease.</h5>
                            <p className="text-start"><button className="btn btn-light" type="button" style={{ marginBottom: '10%' }}>Join Now</button></p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>

    )
}

export default Product