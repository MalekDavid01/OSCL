import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import newsData from '../data/NewsData'; // Import the data
import '../styles/News.css';

const News = () => {
  return (
    <Container fluid className="news-container">
      <h2 className="news-title">Our Latest News!</h2>
      <Row>
        {newsData.map((news) => (
          <Col md={6} key={news.id} className="mb-4">
            <Card className="news-card h-100">
              <Link to={`/news/${news.id}`}>
                <Card.Img variant="top" src={news.image} alt={news.title} className="news-card-image" />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="news-card-title">{news.title}</Card.Title>
                <Card.Text className="news-card-description">
                  {news.shortDescription}
                </Card.Text>
                <Card.Text><small className="text-muted">{news.date}</small></Card.Text>
                <Link to={`/news/${news.id}`} className="mt-auto">
                  <Button variant="dark">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
