import React, { useState } from "react";
import LandingPage from "./LandingPage/LandingPage";
import Services from "./Services/Services";
import { Col, Container, Row } from "react-bootstrap";
import "./Component.scss";
import icon from "../Assets/Favicon.png";
import btnarr from "../Assets/btn-arrow.png";
import Footer from "./Footer/Footer";
import Aboutus from "./Aboutus/Aboutus";
import Industries from "./Industries/Industries";
import Blogs from "./Blogs/Blogs";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogComponent from "./BlogComponent/BlogComponent";
import useWindowSize from "./files/useWindowSize";

function Components() {
  const size = useWindowSize();
  const [page, setPage] = useState("home");
  return (
    <div>
      <Container fluid>
        <Row className="navbar">
          <Col className="logoCol" md={4} xs={6}>
            <img onClick={() => setPage("home")} src={icon}></img>
          </Col>
          {size.width > 768 && (
            <Col className="links" xs={8}>
              <Link
                to="/"
                onClick={() => {
                  setPage("home");
                  window.scroll(0, 0);
                }}
                className={page === "home" ? "activenav" : ""}
              >
                <a
                  href="/"
                  onClick={() => {
                    setPage("home");
                    window.scroll(0, 0);
                  }}
                  className={page === "home" ? "activenav" : ""}
                >
                  About Us
                </a>
              </Link>
              <Link
                to="/services"
                onClick={() => {
                  setPage("services");
                  window.scroll(0, 0);
                }}
                className={page === "services" ? "activenav" : ""}
              >
                <a
                  href="#services"
                  onClick={() => {
                    setPage("services");
                    window.scroll(0, 0);
                  }}
                  className={page === "services" ? "activenav" : ""}
                >
                  Services
                </a>
              </Link>
              <Link
                to="/blogs"
                onClick={() => {
                  setPage("blogs");
                  window.scroll(0, 0);
                }}
                className={page === "blogs" ? "activenav" : ""}
              >
                <a
                  href="#blogs"
                  onClick={() => {
                    setPage("blogs");
                    window.scroll(0, 0);
                  }}
                  className={page === "blogs" ? "activenav" : ""}
                >
                  Blogs
                </a>
              </Link>
              <Link
                to="/industries"
                onClick={() => {
                  setPage("industries");
                  window.scroll(0, 0);
                }}
                className={page === "industries" ? "activenav" : ""}
              >
                <a
                  href="#industries"
                  onClick={() => {
                    setPage("industries");
                    window.scroll(0, 0);
                  }}
                  className={page === "industries" ? "activenav" : ""}
                >
                  Industries
                </a>
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  setPage("geolocation");
                  window.scroll(0, 0);
                }}
                className={page === "geolocation" ? "activenav" : ""}
              >
                <a
                  href="#about"
                  onClick={() => {
                    setPage("geolocation");
                    window.scroll(0, 0);
                  }}
                  className={page === "geolocation" ? "activenav" : ""}
                >
                  GeoLocation
                </a>
              </Link>
              <Link to="/connect">
                <a className="buttondiv">
                  Let's Connect{" "}
                  <span className="icon">
                    <img src={btnarr}></img>
                  </span>
                </a>
              </Link>
            </Col>
          )}

          {size.width < 768 && <div></div>}
        </Row>
      </Container>

      <Routes>
        <Route path="/" element={<Aboutus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blogContent" element={<BlogComponent />} />
      </Routes>
      <Footer data={setPage} page={page} />
    </div>
  );
}
export default Components;
