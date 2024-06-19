import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Industries.scss";
import rocket1 from "../../Assets/Saly.png";
import e111 from "../../Assets/111.png";
import cut from "../../Assets/whitecut.png";
import cutiv from "../../Assets/whitecutiv.png";
import abt4 from "../../Assets/30.png";
import abt5 from "../../Assets/31.png";
import abt6 from "../../Assets/32.png";
import abt7 from "../../Assets/33.png";
function Industries() {
  return (
    <div className="industries">
      <h1>Industries</h1>

      <Container fluid className="induscot">
        <Row>
          <Col className="img" sm={12} md={6}>
            <img src={rocket1} />
          </Col>
          <Col className="text" sm={12} md={6}>
            <h4>Gaming and esports</h4>
            <p>
              Innovation is the key to survival in Gaming Industry to cope keep up with changing market trends. Our payment terminal is clubbed with some very
              advanced tools to help you with transaction management and fighting online fraud, where merchants can reduce the time and money spent on these
              problems. We enable merchants accepting payments in some of the most tactical regions with over 50 gaming-friendly payment methods. Our instant
              Payout Solution is loved by Gaming merchants where they are able to retain their VIP clients by paying their winnings directly to their accounts.
            </p>
          </Col>
        </Row>
      </Container>
      <img className="cutimg" src={cut}></img>
      <div className="metaCot">
        <div className="meta">
          <img src={e111}></img>
        </div>
        <div className="card lefttop">
          <h4>Global Coverage</h4>
          <p>with the most popular payment method</p>
        </div>
        <div className="card righttop">
          <h4>Fraud Prevention</h4>
          <p>Charges mitigation services</p>
        </div>
        <div className="card rightbottom">
          <h4>Cards & APMs</h4>
          <p>All comes through single API access</p>
        </div>
        <div className="card leftbottom">
          <h4>High Approval Rates</h4>
          <p>by smart routing, Cascading and auto reties</p>
        </div>
      </div>
      <img className="cutimg" src={cutiv}></img>
      <h2>What we offer you with an Online Gaming Merchant Account:</h2>
      <Row className="animation">
        <div class="content">
          <div class="content__container">
            <ul class="content__container__list">
              <li class="content__container__list__item">
                <div className="cardContainer">
                  <div className="card">
                    <img src={abt4}></img>
                    <h4>Global Banking Network.</h4>
                    <p>
                      Establish multiple Visa channels via single API connection. Or diversify accounts for backup and risk mitigation in payment processing.
                    </p>
                  </div>
                </div>
              </li>
              <li class="content__container__list__item">
                <div className="cardContainer">
                  <div className="card">
                    <img src={abt5}></img>
                    <h4>Chargeback Mitigation Services</h4>
                    <p>Chargeback Mitigation Services stop chargebacks before they happen.  Fight chargebacks if they occur.</p>
                  </div>
                </div>
              </li>
              <li class="content__container__list__item">
                <div className="cardContainer">
                  <div className="card">
                    <img src={abt6}></img>
                    <h4>Advanced Fraud Fighting Tools</h4>
                    <p>Secure your business. Customize settings to respond to changing conditions.</p>
                  </div>
                </div>
              </li>
              <li class="content__container__list__item">
                <div className="cardContainer">
                  <div className="card">
                    <img src={abt7}></img>
                    <h4>High Approval Rates</h4>
                    <p>High Approval Rates by smart routing, Cascading and auto-retries.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Row>
    </div>
  );
}
export default Industries;
