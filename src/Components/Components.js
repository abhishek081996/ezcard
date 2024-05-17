import React, { useState } from 'react';
import LandingPage from './LandingPage/LandingPage';
import Services from './Services/Services';
import { Col, Container, Row } from 'react-bootstrap';
import './Component.scss';
import icon from '../Assets/Favicon.png';
import btnarr  from '../Assets/btn-arrow.png';
import Footer from './Footer/Footer';
import Aboutus from './Aboutus/Aboutus';
import Industries from './Industries/Industries';
function Components ()
{
    const[page,setPage] = useState("home");
    return (<div>
                <Container fluid>
        <Row className='navbar'>
        <Col className='logoCol' ><a href="#home" onClick={ () => setPage("home")}><img  src={icon} width="80px" wid></img></a></Col>
        <Col className='links'>
            <a href='#about' onClick={ () => setPage("home")} className ={page === 'home' ?'activenav':""}>About Us</a>
            <a href='#about' onClick={ () => setPage("services")} className ={page === 'services' ?'activenav':""}>Services</a>
            <a href='#about' onClick={ () => setPage("industries")} className ={page === 'industries' ?'activenav':""}>industries</a>
            <a href='#about' onClick={ () => setPage("geolocation")} className ={page === 'geolocation' ?'activenav':""}>GeoLocation</a>
            <a className='buttondiv'>Let's Connect <span className='icon'><img src={btnarr}></img></span></a>
        </Col>
        </Row>
        </Container>
        {page === 'home' &&<LandingPage/>}
        {page==='home' && <Aboutus/>}
        {page === 'services' &&<Services/>}
        {page === 'industries' &&<Industries/>}
        <Footer/>
    </div>);
}
export default Components;

