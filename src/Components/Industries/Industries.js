import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Industries.scss'
import img1 from '../../Assets/ArrowSquareUp.png'
import img2 from '../../Assets/ArrowSquareDown.png'
import img3 from '../../Assets/Thunder2.png'
function Industries()
{

return <div className='industries'>
<h1>Industries</h1>
<Container fluid className="cards">
            <Row className='cardrow'>
                <Col className="card"><span className='headerspan'><img src={img2}></img><h1>Low Risk</h1></span><p>
                <br/>&nbsp;•&nbsp;Online Retail
                    <br/>&nbsp;•&nbsp;Online Magazines and Digital Content
                   <br/>&nbsp;•&nbsp; eCommerce
                   <br/>&nbsp;•&nbsp; Restaurants and Food chains
                   <br/>&nbsp;•&nbsp; Telecommunication</p></Col>
                <Col className="card"><span className='headerspan'><img src={img1}></img><h1>Med Risk</h1></span><p>
                <br/>&nbsp;•&nbsp;Travel
                <br/>&nbsp;•&nbsp; Dating
                <br/>&nbsp;•&nbsp;Marketing Agencies
                <br/>&nbsp;•&nbsp;IT and Software Services
                    </p></Col>
                <Col className="card"><span className='headerspan'><img src={img3}></img><h1>High Risk</h1></span><p>
                <br/>&nbsp;•&nbsp;Gaming & Esports
               <br/>&nbsp;•&nbsp; Gaming Merchant Account
                <br/>&nbsp;•&nbsp;Forex
                    </p></Col>
            </Row>
            <Row className='verticalrow'>
            <Row className="card"><span className='headerspan'><img src={img2}></img><h1>Low Risk</h1></span>
            <p>The greater part of the merchants in the E-Commerce industry are tested to keep the harmony between the increment of income and extortion levels. Card Paymentz Merchant Account sees the entirety of the inconveniences and will assist with tracking this issue effectively for any business without making any difference on the off chance that you are a little, medium or huge trader. We have an expert team of opening low/medium risk merchant accounts which implies substantially more expert methodology so you can be 100% certain that your medium or generally safe vendor record will be protected, secure and helpful both for you and your customers.</p>
            <h6>Industries which can be labelled as low Risk:</h6>
            <p>&nbsp;•&nbsp;Online Retail
                    <br/>&nbsp;•&nbsp;Online Magazines and Digital Content
                   <br/>&nbsp;•&nbsp; eCommerce
                   <br/>&nbsp;•&nbsp; Restaurants and Food chains
                   <br/>&nbsp;•&nbsp; Telecommunication</p></Row>
                <Row className="card"><span className='headerspan'><img src={img1}></img><h1>Med Risk</h1></span>
                <p>
                The greater part of the merchants in the E-Commerce industry are tested to keep the harmony between the increment of income and extortion levels. Card Paymentz Merchant Account sees the entirety of the inconveniences and will assist with tracking this issue effectively for any business without making any difference on the off chance that you are a little, medium or huge trader. We have an expert team of opening low/medium risk merchant accounts which implies substantially more expert methodology so you can be 100% certain that your medium or generally safe vendor record will be protected, secure and helpful both for you and your customers.
                </p>
                <h6>Industries which can be labelled as Medium Risk:</h6>
                <p>
                &nbsp;•&nbsp;Travel
                <br/>&nbsp;•&nbsp; Dating
                <br/>&nbsp;•&nbsp;Marketing Agencies
                <br/>&nbsp;•&nbsp;IT and Software Services
                    </p></Row>
                <Row className="card"><span className='headerspan'><img src={img3}></img><h1>High Risk</h1></span>
                <h5>Gaming & Esports</h5>
                <p>
                Innovation is the key to survival in Gaming Industry to cope keep up with changing market trends.
Our processing channels help merchants exploring some geographically difficult regions by leveraging our global Visa and MasterCard channels and over 50 gaming-friendly payment methods.
Our instant Payout Solution is loved by Gaming merchants where they are able to retain their VIP clients by paying their winnings directly to their accounts.
We understand the challenges online gaming platforms face in being compliant with Visa and MasterCard.  Usually banks don’t accept gaming businesses due to the high risk of fraud, and the higher frequency of chargebacks. Our payment terminal is clubbed with some very advanced tools to help you with transaction management and fighting online fraud, where merchants can reduce the time and money spent on these problems.</p>
                <h6>What we offer you with an Online Gaming Merchant Account:</h6>
                <p>
                &nbsp;•&nbsp;Gaming & Esports
               <br/>&nbsp;•&nbsp; Gaming Merchant Account
                <br/>&nbsp;•&nbsp;Forex
                    </p>
                    <h5>Forex</h5>
                    <p>
                    The foreign exchange market is considered the world's largest and most liquid financial market. We offer a processing platform that allows for easy payment in dozens of different currencies. Our vast experience working with the key industry players enables us to support our merchants in all possible dimensions so as to scrubbing the risk of Online Fraud with standard set of in-built tools.
                    </p>
                    &nbsp;&nbsp;<h6>Features</h6>
                   <p>
                     &nbsp;&nbsp;•&nbsp;High-volume forex payment processing We degrade the very common notion to limit your monthly processing volume to hedge the risk associated.
                     <br/>&nbsp;&nbsp;•&nbsp;Multicurrency Processing Our customized Forex solution let you accept payments and receive settlements in all major world currencies.
                     <br/>&nbsp;&nbsp;•&nbsp;Reduce declined payments Boost your transaction’s success rate with local MIDs. Our smart cascading methodology helps reaching your transaction where it gets fastest approvals with.
                                        </p>
                    </Row>
            </Row>

          </Container>
</div>;
}

export default Industries;