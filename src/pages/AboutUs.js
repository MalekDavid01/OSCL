import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import stadiumImage from '../assets/stadium.jpg'; // Update with your image path
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <Container fluid className="about-us-container">
      <h2 className="about-title">About Us</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Game Kickoff Times</Card.Title>
              <Card.Text>
                <ul>
                  <li>Monday to Friday:</li>
                  <ul>
                    <li>6:00 PM</li>
                    <li>7:00 PM</li>
                    <li>8:00 PM</li>
                    <li>9:00 PM</li>
                    <li>10:00 PM</li>
                  </ul>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Field Locations</Card.Title>
              <Card.Text>
                <ul>
                  <li>Field 1: 123 Soccer St Ottawa, Ontario K1Y 1G1</li>
                  <li>Field 2: 123 Team St Ottawa, Ontario K1Y 2G1</li>
                  <li>Field 3: 123 Club St Ottawa, Ontario K1Y 3G1</li>
                  <li>Field 4: 123 Stadium St Ottawa, Ontario K1Y 4G1</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
                <ul>
                  <li>Address: 124 Champions Drive Ottawa, Ontario K1Y 1G2</li>
                  <li>Phone Number: 613-111-1111</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img src={stadiumImage} alt="Stadium" className="stadium-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
