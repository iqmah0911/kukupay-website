import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import a1c from '../img/a1c.png';
import abc11 from '../img/aboutculture11.png';
import abc12 from '../img/aboutculture12.png';
import abc13 from '../img/aboutculture13.png';
import abc14 from '../img/aboutculture14.png';
import Nav2 from '../components/nav2';
import "../../src/styles.css";
import "../../src/Navigation-Clean.css";
import "../../src/responsive.css";
import "../../src/Navigation-with-Button.css";
import "../../src/Footer-Dark.css";
import "../../src/Contact-Form-Clean.css";
import "../../src/Clients.css";




const About = () => {
    return (
        <div>
            <div id="mainheader_static">
                <Nav2 />
                <div className="container">
                    <div className="row" style={{ marginTop: '15%' }}>



                        <div className="col-md-7">
                            <h1 className="text-start static-start">We have A Mission To Give Financial Happiness To Everyone </h1>
                            <p style={{ color: '#333', marginTop: '4%' }}>Our mission of bringing financial happiness to millions of&nbsp;financially underserved people would need us not&nbsp;only develop products, but also the individuals, teams&nbsp;and the environment to get it done. This is why we are very conscious of our people, values and culture. </p>
                        </div>
                        <div className="col-md-5 text-center">
                            <p><img className="w-100" src={a1c} /></p>

                        </div>
                    </div>
                </div>

            </div>

            <section className="staticpro">
                <div className="container">
                    <h1 className="text-center" style={{ color: '#0c387f', padding: '10px' }}>Know more about<br />Kukupay</h1>
                    <p className="text-center">
                        Kukupay is all about giving our highly esteemed customers their financial freedom and happiness. We are growing every single day, and bringing in new innovations that will change the world of finance, banking and technology.


                        <br />We believe financial happiness shouldn't be for some sets of people by language, race or region. We are the bank for the deserved and undeserved— wherever you are in the world.


                        <br />
                        That's the reason at Kukupay, we let you be in control.
                        We've got you covered, no matter how  you want to bank it from anywhere in the world.



                    </p>
                    <div className="row" style={{ marginTop: '10%' }}>
                        <div className="col-md-5">
                            <p className="text-center"><img className="w-100" src={abc11} /></p>

                        </div>
                        <div className="col chexs">
                            <h6>KUKUPAY CULTURE</h6>
                            <h2 className="contenth2">The people <br />&amp; Culture</h2>
                            <p className="homecontenttext">At KukuPay, you would be coming into an environment where you can exchange ideas, make lifelong friends and forge great memories. Our culture of excellence is evident in everything we do, be it work or having fun, we never settle. We welcome diversity and provide equal opportunity for all employees without regard to race, colour, religion, national origin, sex, age, marital status, disability, political affiliation, personal appearance, family responsibilities. </p>


                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '5%' }}>
                        <div className="col chexs chexs2">
                            <h6>KUKUPAY WORK</h6>
                            <h2 className="contenth2">Do works<br />that matters</h2>
                            <p className="homecontenttext">We are a company on a mission, so your expertise has the potential to make a huge difference and impact the world. This is why you'll join other team members in doing work that matters every day. Creating financial services for over a billion people is a lofty task and we are not delusional about it. So every hypothesis, line of code, copy and product feature that comes from an Aptian is important and inches us closer to our goals.</p>

                        </div>

                        <div className="col-md-5 d-none d-sm-block">
                            <p className="text-center"><img className="w-100" src={abc12} /></p>

                        </div>
                    </div>

                    <div className="row" style={{ marginTop: '10%' }}>
                        <div className="col-md-5">
                            <p className="text-center"><img className="w-100" src={abc13} /></p>

                        </div>

                        <div className="col chexs">
                            <h6>KUKUPAY CULTURE</h6>
                            <h2 className="contenth2">Growth<br />opportunities</h2>
                            <p className="homecontenttext">Whether you are fresh out of school, or a professional seeking the next big level, we have diverse career paths that develop your skills, interests, and goals. Because of the fast-paced environment at TeamApt, learning never stops and the best part about it is that you would never have to do it alone. Our flat structure enables you to interact with some of the brightest minds in the industry, so you would be surrounded by people challenging and assisting your growth </p>


                        </div>
                    </div>

                    <div className="row" style={{ marginTop: '5%' }}>
                        <div className="col chexs chexs2">
                            <h6>KUKUPAY WORK</h6>
                            <h2 className="contenth2">Remote work<br />&amp; other benefit</h2>
                            <p className="homecontenttext">We are a company on a mission, so your expertise has the potential to make a huge difference and impact the world. This is why you'll join other team members in doing work that matters every day. Creating financial services for over a billion people is a lofty task and we are not delusional about it. So every hypothesis, line of code, copy and product feature that comes from an Aptian is important and inches us closer to our goals.</p>
                        </div>

                        <div className="col-md-5">
                            <p className="text-center"><img className="w-100" src={abc14} /></p>
                        </div>



                    </div>
                </div>
            </section>

            <section className="corevar">
                <div className="container">
                    <h1 style={{ borderBottom: '3px solid orange', paddingBottom: '3%', marginBottom: '4%' }}>CULTURE</h1>
                    <p className="text-center">At Kukupay, our value is our culture; our culture is our service.
                        <br /> We strive to uphold our values as we are guided by;
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <h2><span className="hightext">01&nbsp;</span>Passion</h2>

                        </div>

                        <div className="col-md-6">
                            <p><br /><br /> With full passion, we work to make sure financial happiness is for everyone. <br />
                                We drive to give everyone a banking experience that'll help create brighter futures, and usher in a new age of financial happiness that lasts forever. </p>

                        </div>

                        <div className="col">
                            <hr />

                        </div>


                    </div>

                    <div className="row movec">
                        <div className="col-md-6">
                            <h2><span className="hightext">02&nbsp;</span>Empathy</h2>
                        </div>
                        <div className="col-md-6">
                            <p><br /><br />In our pursuit of financial happiness for all, we move to identify and understand our customers to ensure we provide the right tools to put you on control of your finance.
                                <br />
                                We put ourselves in your shoes, to enable us to truly help you.
                            </p>
                        </div>

                        <div className="col">

                            <hr />
                        </div>

                    </div>

                    <div className="row movec">
                        <div className="col-md-6">
                            <h2><span className="hightext">03&nbsp;</span>Grit</h2>
                        </div>

                        <div className="col-md-6">
                            <p><br /><br />In our pursuit of financial happiness for all, we don't get distracted by our successes.<br />
                                We're focused on the mission of creating a service that lasts forever through constant improvement.
                            </p>
                        </div>

                        <div className="col">
                            <hr />

                        </div>


                    </div>


                    <div className="row movec">
                        <div className="col-md-6">
                            <h2><span className="hightext">04&nbsp;</span>Curiosity</h2>
                        </div>

                        <div className="col-md-6">
                            <p><br /><br />In pursuit of financial happiness for everyone, we create and work with high curiosity to constantly evolve and usher in high innovations to achieve this mission.
                                <br />
                                In curiosity, we never stop learning.
                            </p>
                        </div>
                        <div className="col">
                            <hr />
                        </div>

                    </div>

                    <div className="row movec">
                        <div className="col-md-6">
                            <h2><span className="hightext">05&nbsp;</span>Professionalism<br /></h2>
                        </div>
                        <div className="col-md-6">
                            <p><br /><br />In pursuit of financial happiness for everyone, we are constantly building a team of high professionals to bring this mission to reality.
                                <br />We don't get down professionally; we upgrade ourselves each single day.


                            </p>
                        </div>
                        <div className="col">
                            <hr />
                        </div>
                    </div>

                    <div className="row movec">
                        <div className="col-md-6">
                            <h2><span className="hightext">06&nbsp;</span>Honesty</h2>
                        </div>
                        <div className="col-md-6">
                            <p><br /><br />In pursuit to create financial happiness for everyone, we appear transparent and clear in this mission to serve one, and serve all.

                                <br />We pride ourselves in being the best at what we do.
                                Everything we do is backed by logic and numbers.


                            </p>
                        </div>
                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
};

export default About;