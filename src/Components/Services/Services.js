import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.scss";
import onboarding from "../../Assets/5.png";
import img6 from "../../Assets/6.png";
import img7 from "../../Assets/7.png";
import imgsld1 from "../../Assets/IconSlider/1.png";
import imgsld2 from "../../Assets/IconSlider/2.png";
import imgsld3 from "../../Assets/IconSlider/3.png";
import imgsld4 from "../../Assets/IconSlider/4.png";
import imgsld5 from "../../Assets/IconSlider/5.png";
import imgsld6 from "../../Assets/IconSlider/6.png";

import imgsld7 from "../../Assets/IconSlider/7.png";
import imgsld8 from "../../Assets/IconSlider/8.png";
import imgsld9 from "../../Assets/IconSlider/9.png";
import imgsld10 from "../../Assets/IconSlider/10.png";
import report from "../../Assets/report.png";
function Services() {
  const TAGS = [imgsld1, imgsld2, imgsld3, imgsld4, imgsld5, imgsld6, imgsld7, imgsld8, imgsld9, imgsld10];
  const DURATION = 15000;
  const ROWS = 2;
  const TAGS_PER_ROW = 5;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
      <div
        className="loop-slider"
        style={{
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        }}
      >
        <div className="inner">
          {children}
          {children}
        </div>
      </div>
    );
  };

  const Tag = ({ text }) => (
    <div className="tag">
      <img src={text} />
    </div>
  );

  return (
    <>
      <div className="services">
        <Container fluid>
          {false && (
            <Row>
              <Col></Col>
              <Col className="plb">
                Payments. Lending.
                <br />
                Banking.
              </Col>
            </Row>
          )}
          <Row className="onboarding">
            <Col md={4} sm={12}>
              <img src={onboarding}></img>
            </Col>
            <Col className="onboardingcol" md={4} sm={12}>
              <div className="innerdiv">
                <div>
                  <h1>Credit Card Processing</h1>
                  <p>
                    We handle opening of user/bank accounts, customer onboarding, compliance checks, and regulatory requirements, end-to-end. We guarantee
                    industry standard compliance and a frictionless user experience.
                  </p>
                </div>
                <div className="slno">
                  {" "}
                  <p>01</p>
                  <div className="bar"></div>
                </div>
              </div>
            </Col>
          </Row>
          <Container className="cards">
            <Row>
              <Col md={4} sm={12}>
                <div className="card">
                  <h1>Pay-Ins</h1>
                  <p>Accept uninterrupted payments from your global customer base irrespective of the payment method they prefer to pay.</p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="card">
                  <h1>Payouts</h1>
                  <p>Pay your client’s to their account directly with our instant Pay-out solutions either manually or with an automated API call.</p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="card">
                  <h1>Access To Difficult Markets</h1>
                  <p>Credit card penetration in markets that are usually difficult to penetrate.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12}>
                <div className="card">
                  <h1>One Single API To Reach Your Global User Base</h1>
                  <p>
                    Card Paymentz is a fully integrated payments solution that offers payment solutions ranging from Card Acquiring, Crypto Acquiring, Instant
                    SEPA network and other Alternate Payment methods.
                  </p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="card">
                  <h1>Security Is The Key</h1>
                  <p>
                    With our In-house-developed technology, we are committed to keeping your and your user's data in a secured manner by implementing advanced
                    Fraud detection and monitoring tools run on AI and rule-based risk management
                  </p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="card">
                  <h1>Reporting That Stands Out Your Account</h1>
                  <p>
                    Generate professional invoices, Calculate your pricing, settlements, reserves—all from one place. Save time with auto-billing, stored
                    information, and powerful reporting tools.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          <Row className="onboarding even">
            <Col className="onboardingcol" md={4} sm={12}>
              <div className="innerdiv">
                <div className="slno">
                  {" "}
                  <p>02</p>
                  <div className="bar"></div>
                </div>
                <div>
                  <h1>Bank-to-Bank Transfers</h1>
                  <p>
                    Access to A2A payments through Open Banking connections covering 300+ Banks in 25+ Countries across EEA for high-risk business-like gaming
                    (Curaçao license friendly), crypto, dating, Travel etc.Possible integrations via API, Praxis, PaymentIQ,
                    <br />
                    <br /> • Bullet speed integration with 24*7 Merchant support
                    <br /> • Insta SEPA Payins and Payouts at ultra low fees.
                    <br /> • Achieve a Success rate Up to 98%
                    <br /> • Zero Chargeback possibility
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <img src={img6}></img>
            </Col>
          </Row>

          <Row>
            <div className="transaction">The transaction gets success in 4 simple steps:</div>
          </Row>
          <Container className="cards">
            <Row>
              <Col md={3} sm={12}>
                <div className="card cardsmall">
                  <h1>1</h1>
                  <p>After integration user sees instant bank payment button depending on the country the txn is initiated.</p>
                </div>
              </Col>
              <Col md={3} sm={12}>
                <div className="card cardsmall">
                  <h1>2</h1>
                  <p>User chooses their preferred bank to proceed.</p>
                </div>
              </Col>
              <Col md={3} sm={12}>
                <div className="card cardsmall">
                  <h1>3</h1>
                  <p>User authorizes to bank account and easily makes a payment.</p>
                </div>
              </Col>
              <Col md={3} sm={12}>
                <div className="card cardsmall">
                  <h1>4</h1>
                  <p>Merchant sees all the stats including transactions in their admin console.</p>
                </div>
              </Col>
            </Row>
          </Container>
          <Row className="onboarding">
            <Col md={4} sm={12}>
              <img src={img7}></img>
            </Col>
            <Col className="onboardingcol" md={4} sm={12}>
              <div className="innerdiv">
                <div>
                  <h1>Alternative Payment Methods (APMs)</h1>
                  <p>
                    <br />
                    APMs: The driving force behind Emerging Markets <br />
                    <br />
                    Accept local payment methods and boost acceptance rates. With dynamic FX conversion, cross-border transactions, and support for multiple
                    alternative payment methods via single API, allow your users in emerging markets to pay they know how. 
                  </p>
                </div>
                <div className="slno">
                  {" "}
                  <p>03</p>
                  <div className="bar"></div>
                </div>
              </div>
            </Col>
            <br />
            <Row>
              <div className="transaction apm">Available APMs</div>
            </Row>

            <Row className="iconslider">
              <div className="tag-list">
                {[...new Array(ROWS)].map((_, i) => (
                  <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                    {shuffle(TAGS)
                      .slice(0, TAGS_PER_ROW)
                      .map((tag) => (
                        <Tag text={tag} key={tag} />
                      ))}
                  </InfiniteLoopSlider>
                ))}
                <div className="fade" />
              </div>
            </Row>
          </Row>

          <Row className="report">
            <Col md={6} sm={12}>
              <img src={report} />
            </Col>
            <Col md={6} sm={12}>
              <p>Reporting That Stands Out Your Account</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Services;
