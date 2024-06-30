import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row>
          <Col md={4}>
            <p>The most loved competition in town!</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>Home</li>
              <li>Explore Competitions</li>
              <li>Register</li>
              <li>News</li>
              <li>About Us</li>
            </ul>
          </Col>
          <Col md={4}>
            <p>Contact us</p>
            <p>Phone: +1 (613) 111-2222</p>
            <p>Fax: +1 (613) 222-3333</p>
            <p>Email: email@me.ca</p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
