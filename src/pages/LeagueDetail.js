// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import leaguesData from '../data/LeaguesData'; // Import the data

// const LeagueDetail = () => {
//   const { id } = useParams();
//   const league = leaguesData.find(league => league.id === parseInt(id));

//   if (!league) {
//     return <p>League not found</p>;
//   }

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <img src={league.image} alt={league.name} style={{ width: '200px', marginBottom: '20px' }} />
//           <h2>{league.name}</h2>
//           <p><strong>Competition Level:</strong> {league.competition}</p>
//           <p><strong>Age Group:</strong> {league.ageGroup}</p>
//           <p><strong>Gender:</strong> {league.gender}</p>
//           <p><strong>Day:</strong> {league.day}</p>
//           <Button variant="dark">Register your team now!</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LeagueDetail;


import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import leaguesData from '../data/LeaguesData'; // Import the data

const LeagueDetail = () => {
  const { id } = useParams();
  const league = leaguesData.find(league => league.id === parseInt(id));

  if (!league) {
    return <p>League not found</p>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <img src={league.image} alt={league.name} style={{ width: '200px', marginBottom: '20px' }} />
          <h2>{league.name}</h2>
          <p><strong>Competition Level:</strong> {league.competition}</p>
          <p><strong>Age Group:</strong> {league.ageGroup}</p>
          <p><strong>Gender:</strong> {league.gender}</p>
          <p><strong>Day:</strong> {league.day}</p>
          <Button variant="dark">Register your team now!</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LeagueDetail;

