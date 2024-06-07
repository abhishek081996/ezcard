import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.scss";
import onboarding from "../../Assets/5.png";
import img6 from "../../Assets/6.png";
import img7 from "../../Assets/7.png";

function Services() {
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
                  <h1>Customer Onboarding & KYC</h1>
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
                  <h1>Customer Onboarding & KYC</h1>
                  <p>
                    We handle opening of user/bank accounts, customer onboarding, compliance checks, and regulatory requirements, end-to-end. We guarantee
                    industry standard compliance and a frictionless user experience.
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
              <Col className="card cardsmall">
                <h1>1</h1>
                <p>After integration user sees instant bank payment button depending on the country the txn is initiated.</p>
              </Col>
              <Col className="card cardsmall">
                <h1>2</h1>
                <p>User chooses their preferred bank to proceed.</p>
              </Col>
              <Col className="card cardsmall">
                <h1>3</h1>
                <p>User authorizes to bank account and easily makes a payment.</p>
              </Col>
              <Col className="card cardsmall">
                <h1>4</h1>
                <p>Merchant sees all the stats including transactions in their admin console.</p>
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
                  <h1>Customer Onboarding & KYC</h1>
                  <p>
                    We handle opening of user/bank accounts, customer onboarding, compliance checks, and regulatory requirements, end-to-end. We guarantee
                    industry standard compliance and a frictionless user experience.
                  </p>
                </div>
                <div className="slno">
                  {" "}
                  <p>03</p>
                  <div className="bar"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Services;
