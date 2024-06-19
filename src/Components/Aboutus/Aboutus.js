import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import abt1 from "../../Assets/abt1.png";
import abt2 from "../../Assets/abt2.png";
import abt3 from "../../Assets/abt3.png";
import abt4 from "../../Assets/25.png";
import abt5 from "../../Assets/28.png";
import abt6 from "../../Assets/27.png";
import abt7 from "../../Assets/29.png";
import "./Aboutus.scss";

import { AnimationOnScroll } from "react-animation-on-scroll";
import LandingPage from "../LandingPage/LandingPage";
function Aboutus() {
  return (
    <>
      <Container fluid>
        <LandingPage />
      </Container>
      <div className="aboutus">
        <Container fluid className="aboutuscon">
          <Row className="aboutrow">
            <Col>
              <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5}>
                <Col className="aboutcolimg">
                  {" "}
                  <h4>About Us</h4>
                  <br />
                  <p>
                    Card Paymentz is a Payment Gateway provider that enables businesses of every size to utilise a single API to accept payments from customers
                    wherever and however they prefer,
                  </p>
                  <p>
                    Our tech-enabled platform helps e-commerce businesses revolutionize their merchant and banking services with a complete Payment Ecosystem to
                    enter new markets with a calculative approach.
                  </p>
                </Col>
              </AnimationOnScroll>
            </Col>
            <Col>
              <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5}>
                <Col className="aboutcoltxt">
                  <img src={abt1}></img>
                </Col>
              </AnimationOnScroll>
            </Col>
          </Row>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5}>
            <Row className="aboutrow">
              <Col className="aboutcolimg">
                {" "}
                <h4>Our Team and Why Us</h4>
                <p>
                  <span className="quote">“Our Team ”</span>
                  <br />
                  <br />
                  A team of Payment professionals backed by extensive experience working with banks and key stakeholders within the industry. We
                  Analyse-Devise-Execute the right payment solution for your business.
                  <br />
                  <br />
                  <span className="quote">“A team that believes in your ideas! ”</span>
                  <br />
                  <br />
                  We learn your motivation to act as a catalyst for your business goals and help you stand out from your competitors.
                  <br />
                  <br />
                  <span className="quote">“We serve you the way you run ”</span>
                  <br />
                  <br />
                  Flexible integration for your business that enables your customers to pay the way they wish to. We facilitate their transaction experience
                  maintaining the highest level of security standards.
                </p>
              </Col>
              <Col className="aboutcoltxt">
                <img src={abt3} style={{ height: "30vw" }}></img>
              </Col>
            </Row>
          </AnimationOnScroll>
          <Row className="animation">
            <div class="content">
              <div class="content__container">
                <div class="content__container__text">
                  <p>We are dedicated to your</p>{" "}
                  <div className="text_animation">
                    <ul class="content__container__list__text">
                      <li class="content__container__list__text__item">
                        <div className="textContainer colorbl">Satisfaction</div>
                      </li>
                      <li class="content__container__list__text__item">
                        <div className="textContainer">Growth</div>
                      </li>
                      <li class="content__container__list__text__item">
                        <div className="textContainer colorbl">Success</div>
                      </li>
                      <li class="content__container__list__text__item">
                        <div className="textContainer">Progress</div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <div className="text_animation">
                  <ul class="content__container__list__text">
                    <li class="content__container__list__text__item">
                      <div className="textContainer colorbl">Satisfaction</div>
                    </li>
                    <li class="content__container__list__text__item">
                      <div className="textContainer">Growth</div>
                    </li>
                    <li class="content__container__list__text__item">
                      <div className="textContainer colorbl">Success</div>
                    </li>
                    <li class="content__container__list__text__item">
                      <div className="textContainer">Progress</div>
                    </li>
                  </ul>
                </div> */}
                <ul class="content__container__list">
                  <li class="content__container__list__item">
                    <div className="cardContainer">
                      <div className="card">
                        <img src={abt4}></img>
                        <h4>Global Coverage</h4>
                        <p>Global Coverage with the most popular payment methods.</p>
                      </div>
                    </div>
                  </li>
                  <li class="content__container__list__item">
                    <div className="cardContainer">
                      <div className="card">
                        <img src={abt5}></img>
                        <h4>Hassle free Integration</h4>
                        <p>Hassle free integration to bring you live within 24 hours.</p>
                      </div>
                    </div>
                  </li>
                  <li class="content__container__list__item">
                    <div className="cardContainer">
                      <div className="card">
                        <img src={abt6}></img>
                        <h4>Speak Straight</h4>
                        <p>We speak straight without being rude.</p>
                      </div>
                    </div>
                  </li>
                  <li class="content__container__list__item">
                    <div className="cardContainer">
                      <div className="card">
                        <img src={abt7}></img>
                        <h4>Don’t play behind Email</h4>
                        <p>Don’t play behind Email rather we connect directly via phone</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Aboutus;
