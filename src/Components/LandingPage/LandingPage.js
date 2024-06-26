import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cut from "../../Assets/whitecut.png";
import cut1 from "../../Assets/whitecut1.png";
import video from "../../Assets/video.mp4";
import "./LandingPage.scss";
function LandingPage({ page }) {
  return (
    <div className="landingPage">
      <Container fluid className="videoContainer">
        <Row className="video">
          <video className="videoTag" width="1920" height="1080" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </Row>
      </Container>
      <div className="videoitems">
        <Row className="videotext">GET READY TO TAKE CONTROL OF YOUR FINANCES</Row>
        <Row className="videotext para">We empower businesses with custom APIs for a wide range of financial services</Row>
      </div>

      <img src={page === "blogs" ? cut1 : cut}></img>
    </div>
  );
}
export default LandingPage;
