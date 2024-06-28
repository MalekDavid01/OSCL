import React from 'react';
import { Card } from 'react-bootstrap';

const LeagueCard = ({ league }) => {
  return (
    <Card>
      <Card.Img variant="top" src={`../assets/${league.image}`} />
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
