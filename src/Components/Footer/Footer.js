import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerico from "../../Assets/footerico.png";
import "./Footer.scss";
import btnarr from "../../Assets/btn-arrow.png";
import { Link } from "react-router-dom";
function Footer({ data, page }) {
  return (
    <div>
      <Container fluid className="footer" style={{ backgroundColor: page === "home" ? "#cf2128" : "#fff" }}>
        <Row>
          <Col className="footercol1">
            <img className="footerico" src={footerico}></img>
            <p>
              Card Paymentz enables businesses to utilise a single API to unlock the possibilities and accept payments from multiple methods globally within our
              ecosystem with a secured and streamlined interface.
            </p>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Company"></input>
            <input type="text" placeholder="Email ID"></input>
            <input type="text" placeholder="How can we help?"></input>
            <a className="buttonfooter" href="#send">
              Send{" "}
              <span className="icon">
                <img src={btnarr}></img>
              </span>
            </a>
          </Col>
          <Col className="Foot2">
            <p>
              Phone : +443333394167 <br />
              <br />
              processing@cardpaymentz.com <br />
              <br /> 27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
            </p>
            <br />
            <br />
            <br />
            <p>
              Legal
              <br />
              <br />
              Terms & Conditions
              <br />
              <br />
              FAQ's
              <br />
              <br />
              Privacy Policy
            </p>
          </Col>
          <Col className="Foot2">
            <p>
              {" "}
              <Link to="/">
                <a
                  onClick={() => {
                    window.scroll(0, 0);
                    data("home");
                  }}
                >
                  About Us
                </a>
              </Link>
              <br />
              <br />
              <Link to="/services">
                <a
                  onClick={() => {
                    window.scroll(0, 0);
                    data("services");
                  }}
                >
                  Services
                </a>
              </Link>
              <br />
              <br />
              &nbsp;• Global Payment Processing <br />
              <br />
              &nbsp;• Alternate Payment Methods
              <br />
              <br />
              &nbsp;• Instant SEPA
            </p>
            <br />
            <p>
              <Link to="/industries">
                <a
                  onClick={() => {
                    window.scroll(0, 0);
                    data("industries");
                  }}
                  href="#industries"
                >
                  Industries
                </a>
              </Link>
              <br />
              <br />
              <Link to="/blogs">
                <a
                  onClick={() => {
                    window.scroll(0, 0);
                    data("blogs");
                  }}
                >
                  Blogs
                </a>
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
