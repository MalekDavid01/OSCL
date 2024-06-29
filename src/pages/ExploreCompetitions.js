// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Form, Card, Pagination } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import leaguesData from '../data/LeaguesData'; // Import the data
// import '../styles/ExploreCompetitions.css';

// const ExploreCompetitions = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const leaguesPerPage = 9;
//   const indexOfLastLeague = currentPage * leaguesPerPage;
//   const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;
//   const currentLeagues = leaguesData.slice(indexOfFirstLeague, indexOfLastLeague);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <Container fluid>
//       <h2 className="explore-title">Explore Our Competitions</h2>
//       <Row>
//         <Col md={3}>
//           <div className="filters">
//             <h4>Filters</h4>
//             <Form>
//               <h5>Competition Level</h5>
//               <Form.Check type="checkbox" label="Competitive" />
//               <Form.Check type="checkbox" label="Recreational" />

//               <h5>Age Group</h5>
//               <Form.Check type="checkbox" label="Adult (18+)" />
//               <Form.Check type="checkbox" label="Teenager (13-17)" />
//               <Form.Check type="checkbox" label="Kids (8-12)" />

//               <h5>Gender</h5>
//               <Form.Check type="checkbox" label="Male" name="gender" />
//               <Form.Check type="checkbox" label="Female" name="gender" />

//               <h5>Day of the Week</h5>
//               <Form.Check type="checkbox" label="Monday" name="Day" />
//               <Form.Check type="checkbox" label="Tuesday" name="Day" />
//               <Form.Check type="checkbox" label="Wednesday" name="Day" />
//               <Form.Check type="checkbox" label="Thursday" name="Day" />
//               <Form.Check type="checkbox" label="Friday" name="Day" />
              
//               <Button variant="dark" className="mt-3">Search</Button>
//             </Form>
//           </div>
//         </Col>
//         <Col md={9}>
//           <Row>
//             {currentLeagues.map(league => (
//               <Col md={4} key={league.id}>
//                 <Card className="mb-4 league-card">
//                   <Link to={`/league/${league.id}`}>
//                     <Card.Img variant="top" src={league.image} alt={league.name} className="league-card-img" />
//                   </Link>
//                   <Card.Body>
//                     <Card.Title>
//                       <Link to={`/league/${league.id}`}>{league.name}</Link>
//                     </Card.Title>
//                     <Card.Text>{league.competition} - {league.day}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//           <Pagination className="justify-content-center">
//             {Array.from({ length: Math.ceil(leaguesData.length / leaguesPerPage) }, (_, i) => (
//               <Pagination.Item key={i} onClick={() => paginate(i + 1)} active={i + 1 === currentPage}>
//                 {i + 1}
//               </Pagination.Item>
//             ))}
//           </Pagination>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ExploreCompetitions;


import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import leaguesData from '../data/LeaguesData'; // Import the data
import '../styles/ExploreCompetitions.css';

const ExploreCompetitions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    competitionLevels: [],
    ageGroups: [],
    genders: [],
    daysOfWeek: [],
  });

  const leaguesPerPage = 9;
  const indexOfLastLeague = currentPage * leaguesPerPage;
  const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value);
      } else {
        updatedFilters[filterType].push(value);
      }
      return updatedFilters;
    });
  };

  const applyFilters = () => {
    if (
      filters.competitionLevels.length === 0 &&
      filters.ageGroups.length === 0 &&
      filters.genders.length === 0 &&
      filters.daysOfWeek.length === 0
    ) {
      return leaguesData;
    }
    return leaguesData.filter((league) => {
      const matchesCompetition = filters.competitionLevels.length === 0 || filters.competitionLevels.includes(league.competition);
      const matchesAgeGroup = filters.ageGroups.length === 0 || filters.ageGroups.includes(league.ageGroup);
      const matchesGender = filters.genders.length === 0 || filters.genders.includes(league.gender);
      const matchesDay = filters.daysOfWeek.length === 0 || filters.daysOfWeek.includes(league.day);
      return matchesCompetition && matchesAgeGroup && matchesGender && matchesDay;
    });
  };

  const filteredLeagues = applyFilters();
  const currentLeagues = filteredLeagues.slice(indexOfFirstLeague, indexOfLastLeague);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page whenever filters change
  }, [filters]);

  return (
    <Container fluid>
      <h2 className="explore-title">Explore Our Competitions</h2>
      <Row>
        <Col md={3}>
          <div className="filters">
            <h4>Filters</h4>
            <Form>
              <h5>Competition Level</h5>
              <Form.Check type="checkbox" label="Competitive" onChange={() => handleFilterChange('competitionLevels', 'Competitive')} />
              <Form.Check type="checkbox" label="Recreational" onChange={() => handleFilterChange('competitionLevels', 'Recreational')} />

              <h5>Age Group</h5>
              <Form.Check type="checkbox" label="Adult (18+)" onChange={() => handleFilterChange('ageGroups', 'Adult')} />
              <Form.Check type="checkbox" label="Teenager (13-17)" onChange={() => handleFilterChange('ageGroups', 'Teenager')} />
              <Form.Check type="checkbox" label="Kids (8-12)" onChange={() => handleFilterChange('ageGroups', 'Kids')} />

              <h5>Gender</h5>
              <Form.Check type="checkbox" label="Male" onChange={() => handleFilterChange('genders', 'Male')} />
              <Form.Check type="checkbox" label="Female" onChange={() => handleFilterChange('genders', 'Female')} />

              <h5>Day of the Week</h5>
              <Form.Check type="checkbox" label="Monday" onChange={() => handleFilterChange('daysOfWeek', 'Monday')} />
              <Form.Check type="checkbox" label="Tuesday" onChange={() => handleFilterChange('daysOfWeek', 'Tuesday')} />
              <Form.Check type="checkbox" label="Wednesday" onChange={() => handleFilterChange('daysOfWeek', 'Wednesday')} />
              <Form.Check type="checkbox" label="Thursday" onChange={() => handleFilterChange('daysOfWeek', 'Thursday')} />
              <Form.Check type="checkbox" label="Friday" onChange={() => handleFilterChange('daysOfWeek', 'Friday')} />
            </Form>
          </div>
        </Col>
        <Col md={9}>
          <Row>
            {currentLeagues.map(league => (
              <Col md={4} key={league.id}>
                <Card className="mb-4 league-card">
                  <Link to={`/league/${league.id}`}>
                    <Card.Img variant="top" src={league.image} alt={league.name} className="league-card-img" />
                  </Link>
                  <Card.Body>
                    <Card.Title className="card-title">
                      <Link to={`/league/${league.id}`}>{league.name}</Link>
                    </Card.Title>
                    <Card.Text className="card-text">{league.competition} - {league.day}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination className="justify-content-center">
            {Array.from({ length: Math.ceil(filteredLeagues.length / leaguesPerPage) }, (_, i) => (
              <Pagination.Item key={i} onClick={() => paginate(i + 1)} active={i + 1 === currentPage}>
                {i + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default ExploreCompetitions;
