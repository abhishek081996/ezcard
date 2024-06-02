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
import Blogs from './Blogs/Blogs';
import {HashRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import BlogComponent from './BlogComponent/BlogComponent';

function Components ()
{
    const[page,setPage] = useState("home");
    return (<div>
                <Container fluid>
        <Row className='navbar'>
        <Col className='logoCol' ><a href="#home" onClick={ () => setPage("home")}><img  src={icon} width="80px" wid></img></a></Col>
        <Col className='links'>
            <Link to="/"><a href='/' onClick={ () => setPage("home")} className ={page === 'home' ?'activenav':""}>About Us</a></Link>
            <Link to="/services"><a href='#services' onClick={ () => setPage("services")} className ={page === 'services' ?'activenav':""}>Services</a></Link>
            <Link to="/blogs"><a href='#blogs' onClick={ () => setPage("blogs")} className ={page === 'blogs' ?'activenav':""}>Blogs</a></Link>
            <Link to="/industries"><a href='#industries' onClick={ () => setPage("industries")} className ={page === 'industries' ?'activenav':""}>industries</a></Link>
            <Link to="/about"><a href='#about' onClick={ () => setPage("geolocation")} className ={page === 'geolocation' ?'activenav':""}>GeoLocation</a></Link>
            <Link to="/connect"><a className='buttondiv'>Let's Connect <span className='icon'><img src={btnarr}></img></span></a></Link>
        </Col>
        </Row>
        </Container>

            <Routes>
                <Route path='/' element={<Aboutus/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/industries' element={<Industries/>}/>
                <Route path='/blogContent' element={<BlogComponent/>}/>
            </Routes>
        <Footer/>
    </div>);
}
export default Components;

