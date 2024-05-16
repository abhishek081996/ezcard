import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.scss';
import onboarding from '../../Assets/CustomerOnboarding.png'
function Services()
{
return <>
<div className='services'>
    <Container fluid>
    <Row>
        <Col></Col>
        <Col className='plb'>Payments. Lending.<br/>Banking.</Col>
        </Row>
        <Row className='onboarding'>
            <Col>
            <img src={onboarding}></img>
            </Col>
            <Col>
            <div className='innerdiv'>
                <div>
            <h1>Customer Onboarding & KYC</h1>
            <p>We handle opening of user/bank accounts,
customer onboarding, compliance checks, and
regulatory requirements, end-to-end. We
guarantee industry standard compliance and a
frictionless user experience.</p>
</div>
<div className='slno'> <p>01</p>
<div className='bar'></div></div>
</div>
            </Col>
        </Row>
    </Container>

</div>
</>
}

export default Services;