import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import icon from '../../Assets/favicon.ico';
import video from '../../Assets/video.mp4';
import './LandingPage.scss';
function LandingPage ()
{

    return <div className='landingPage'>
        <Container fluid>
        <Row className='navbar'>
        <Col className='logoCol'><img src={icon} height="30px" wid></img></Col>
        <Col className='links'>
            <a>About Us</a>
            <a>Services</a>
            <a>industries</a>

            <a className='buttondiv'>Let's Connect</a>
        </Col>
        </Row>

        </Container>
        
        <Container fluid className='videoContainer'>
        <Row className='video'>
        <video className='videoTag' autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
        <div className='videoitems'>
        <Row className='videotext'>Fintech happens here</Row>
        <Row className='videotext'>We empower fintechs, banks, and businesses with custom APIs for a wide range of financial services.</Row>
        <Row className='videotext'><svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100" viewBox="0 0 1920 100" fill="none">
<path d="M-6 150.5L1924 0.5V150.5H-6Z" fill="#314FF4"/>

</svg></Row>
</div>
        </Row>
        </Container>
    </div>;
}
export default LandingPage;

