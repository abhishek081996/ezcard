import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon from "../../Assets/favicon.ico";
import video from "../../Assets/video.mp4";
import "./LandingPage.scss";
function LandingPage() {
  return (
    <div className="landingPage">
      <Container fluid className="videoContainer">
        <Row className="video">
          <video className="videoTag" width="1920" height="1080" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <div className="videoitems">
            <Row className="videotext">Fintech happens here</Row>
            <Row className="videotext para">We empower fintechs, banks, and businesses with custom APIs for a wide range of financial services.</Row>
          </div>
        </Row>
      </Container>
    </div>
  );
}
export default LandingPage;
