import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blogs.scss";
import video from "../../Assets/video.mp4";
import blog1 from "../../Assets/blog1.png";
import LandingPage from "../LandingPage/LandingPage";
import {HashRouter as Router ,Routes,Route,Link} from 'react-router-dom';
function Blogs() {
    function randomColor()
    {
    var colors =[15, 45, 75, 105, 135, 165, 195, 225];
var random_color = colors[Math.floor(Math.random() * 8)];
return random_color;
    }
    return (
        <div className="blog">
            <Container fluid><LandingPage/></Container>
        <Container>
            <h5>All blog posts</h5>
            <Row className='blogRow'  >
            <Col className="blogCard" sm={12} md={4}>
            <Link to="/blogcontent">
                    <img src={blog1} alt="Blog Image"></img>
                    <h5>Alec Whitten • 1 Jan 2023</h5>
                    <h3>Bill Walsh leadership lessons</h3>
                    <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                    <div className="tags"><p style={{backgroundColor: `rgba( ${randomColor()},${randomColor()},${randomColor()},0.3)`}}>Leadership</p>
                    <p style={{backgroundColor: `rgba(${randomColor()} , ${randomColor()} , ${randomColor()},0.3)`}}>Management</p></div>
                    </Link></Col>
            <Col className="blogCard"  sm={12} md={4} >
            <Link to="/blogcontent">
                    <img src={blog1} alt="Blog Image"></img>
                    <h5>Demi WIlkinson • 1 Jan 2023</h5>
                    <h3>The best Payment Gateway for your business</h3>
                    <p>The choice of Payment Gateway is a critical decision for any ecommerce business as per its growth perspective, and you as a business must consider </p>
                    <div className="tags"><p style={{backgroundColor: `rgba(${randomColor()},${randomColor()},${randomColor()},0.3)`}}>Leadership</p>
                    <p style={{backgroundColor: `rgba(${randomColor()} , ${randomColor()} , ${randomColor()},0.3)`}}>Management</p></div>
                    </Link>
            </Col>
           
        </Row>
        

        </Container>

        </div>
    );

}
export default Blogs;