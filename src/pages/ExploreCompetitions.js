import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import LeagueCard from '../components/LeagueCard';
import Filters from '../components/Filters';
import '../styles/ExploreCompetitions.css';

// Populate this array with the league objects for each age group, gender, day of the week, and competition level.
const leaguesData = [
  {
    id: 1,
    ageGroup: 'Adult',
    gender: 'Male',
    day: 'Monday',
    competition: 'Competitive',
    image: '../assets/cr7.png',
    name: "Men's Competitive Monday",
  },
  // Add other leagues here...
];

const ExploreCompetitions = () => {
  const [filteredLeagues, setFilteredLeagues] = useState(leaguesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    competition: [],
    ageGroup: [],
    gender: '',
    days: [],
  });

  const leaguesPerPage = 9;

  useEffect(() => {
    // Filter leagues based on the selected filters
    let filtered = leaguesData;
    if (filters.competition.length > 0) {
      filtered = filtered.filter(league => filters.competition.includes(league.competition));
    }
    if (filters.ageGroup.length > 0) {
      filtered = filtered.filter(league => filters.ageGroup.includes(league.ageGroup));
    }
    if (filters.gender) {
      filtered = filtered.filter(league => league.gender === filters.gender);
    }
    if (filters.days.length > 0) {
      filtered = filtered.filter(league => filters.days.includes(league.day));
    }
    setFilteredLeagues(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [filters]);

  const indexOfLastLeague = currentPage * leaguesPerPage;
  const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;
  const currentLeagues = filteredLeagues.slice(indexOfFirstLeague, indexOfLastLeague);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Filters filters={filters} setFilters={setFilters} />
        </Col>
        <Col md={9}>
          <h2 className="explore-title">Explore Our Competitions</h2>
          <Row>
            {currentLeagues.map(league => (
              <Col md={4} key={league.id}>
                <LeagueCard league={league} />
              </Col>
            ))}
          </Row>
          <div className="pagination">
            {Array.from({ length: Math.ceil(filteredLeagues.length / leaguesPerPage) }, (_, i) => (
              <Button key={i} onClick={() => paginate(i + 1)}>
                {i + 1}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExploreCompetitions;
