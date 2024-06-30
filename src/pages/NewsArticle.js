import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import newsData from '../data/NewsData';
import '../styles/News.css';

const NewsArticle = () => {
  const { id } = useParams();
  const news = newsData.find(item => item.id === parseInt(id));

  if (!news) {
    return <div>Article not found</div>;
  }

  return (
    <Container fluid className="news-article-container">
      <h2 className="news-title">Our Latest News!</h2>
      <div className="d-flex align-items-center justify-content-center mb-3 position-relative">
        <Link to="/news" className="position-absolute start-0">
          <Button variant="dark" className="back-button">
            <FaArrowLeft className="me-2" /> Back
          </Button>
        </Link>
        <h2 className="news-article-header m-0">{news.title}</h2>
      </div>
      <div className="text-center">
        <p className="news-article-date">Date: {news.date}</p>
        <p className="news-article-author">Author: John Doe, Reporter for Ottawa Soccer Champions League</p>
      </div>
      <img src={news.image} alt={news.title} className="news-article-image" />
      <p className="news-article-content">{news.content}</p>
    </Container>
  );
};

export default NewsArticle;
