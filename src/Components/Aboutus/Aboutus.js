import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import abt1 from '../../Assets/abt1.png';
import abt2 from '../../Assets/abt2.png';
import abt3 from '../../Assets/abt3.png';
import './Aboutus.scss';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import LandingPage from '../LandingPage/LandingPage';
function Aboutus()
{

    return <><Container fluid><LandingPage/></Container><div className='aboutus'>
        <Container fluid className='aboutuscon'> 
        <AnimationOnScroll animateIn="animate__fadeInLeft" >
            <Row className='aboutrow'>
                <Col className='aboutcolimg'> <h4>About Us</h4>
                <p>CARD PAYMENTZ LIMITED, a company incorporated under the laws of England and Wales, with Company Number 13582655 at its registered office 27 Old Gloucester Street, London, United Kingdom, WC1N 3AX.
Your own payment partner to offer multiple payment options through our diverse network of banks globally. Our tech-enabled platform helps e-commerce businesses revolutionize their merchant and banking services with a complete Payment Ecosystem to enter new markets with a calculative approach. Our seamless payment flow with advanced Routing and Cascading methodology help merchants creating an impact on thier user's experience.</p>
                </Col>
                <Col  className='aboutcoltxt'><img src={abt1}></img></Col>
            </Row>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
            <Row className='aboutrow'>
            <Col  className='aboutcoltxt'><img src={abt2}></img></Col>
                <Col className='aboutcolimg'> <h4>Why Us?</h4>
                <p>Pay-ins: Accept payments from your global customer base including but not limited to EEA, APAC, Africa, and LATAM irrespective of the method they use.

Payouts: Settlements to your own account instantly also you can make payouts directly to your users instantly either manually or with an automated API call.

Security and Convenience: Card Paymentz connects merchants and their consumers through convenient and safer payment options. We’re focused on making merchant’s interface secure as well as QUICK and EASY .

Our financial solution has helped online businesses achieve financial independence by optimising the way they do business. The benefit of working with Card Paymentz speak
</p>
                </Col>
                
            </Row>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft" > 
            <Row className='aboutrow'>
                <Col className='aboutcolimg'> <h4>How We Work</h4>
                <p><span className='quote'>“Team that believes in your ideas! “</span>
                <br/><br/>
We come from a school of thoughts where each business is considered unique from its idea to execution. We act as a catalyst to your business goals with our extensive experience to manage your payment needs and help you stand out from your competitors.
<br/><br/>
<span className='quote'>“We serve you the way you run”</span><br/><br/>

Flexible integration for your business that enables your customers pay the way they wish to. We facilitate their transaction experience and ensures the highest level of security standards.
</p></Col>
                <Col  className='aboutcoltxt'><img src={abt3}></img></Col>
            </Row>
            </AnimationOnScroll>
        </Container>

    </div>

    </>
}
export default Aboutus;