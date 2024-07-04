import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Home.css';
import soccerField from '../assets/HomePageBall.webp';
import soccerPlayer from '../assets/soccer.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/explore-competitions');
  };

  return (
    <div>
      <div className="hero-section" style={{ backgroundImage: `url(${soccerField})` }}>
        <div className="welcome-message">
          <h1>Welcome to the Ottawa Soccer Champions League!</h1>
        </div>
      </div>
      <div className="who-are-we">
        <Container>
          <Row>
            <Col>
              <h2>Who Are We?</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-section">
        <Container>
          <Row>
            <Col md={8}>
              <p>
                The Ottawa Soccer Champions League (OSCL) is the top soccer league in Ottawa, offering competitive and recreational leagues for men and women across various age groups. Join us to compete, have fun, and be part of Ottawa's vibrant soccer community.
              </p>
              <p className="explore-text">
                Discover various competitions that might interest you and join the excitement!
              </p>
              <Button variant="dark" onClick={handleExploreClick}>Explore Competitions</Button>
            </Col>
            <Col md={4}>
              <img src={soccerPlayer} alt="Soccer Player" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
