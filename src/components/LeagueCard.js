import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/LeagueCard.css';

const LeagueCard = ({ league }) => {
  // Ensure the image path is correct
  const imageUrl = require(`../assets/${league.image}`).default;

  return (
    <Card className="league-card">
      <Card.Img variant="top" src={imageUrl} alt={league.name} />
      <Card.Body>
        <Card.Title>{league.name}</Card.Title>
        <Card.Text>
          {league.competition} - {league.day}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LeagueCard;
