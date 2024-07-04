// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Card, Pagination } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import leaguesData from '../data/LeaguesData'; // Import the data
// import '../styles/ExploreCompetitions.css';

// const ExploreCompetitions = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     competitionLevels: [],
//     ageGroups: [],
//     genders: [],
//     daysOfWeek: [],
//   });

//   const leaguesPerPage = 9;
//   const indexOfLastLeague = currentPage * leaguesPerPage;
//   const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;

//   const handleFilterChange = (filterType, value) => {
//     setFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters };
//       if (updatedFilters[filterType].includes(value)) {
//         updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value);
//       } else {
//         updatedFilters[filterType].push(value);
//       }
//       return updatedFilters;
//     });
//   };

//   const applyFilters = () => {
//     if (
//       filters.competitionLevels.length === 0 &&
//       filters.ageGroups.length === 0 &&
//       filters.genders.length === 0 &&
//       filters.daysOfWeek.length === 0
//     ) {
//       return leaguesData;
//     }
//     return leaguesData.filter((league) => {
//       const matchesCompetition = filters.competitionLevels.length === 0 || filters.competitionLevels.includes(league.competition);
//       const matchesAgeGroup = filters.ageGroups.length === 0 || filters.ageGroups.includes(league.ageGroup);
//       const matchesGender = filters.genders.length === 0 || filters.genders.includes(league.gender);
//       const matchesDay = filters.daysOfWeek.length === 0 || filters.daysOfWeek.includes(league.day);
//       return matchesCompetition && matchesAgeGroup && matchesGender && matchesDay;
//     });
//   };

//   const filteredLeagues = applyFilters();
//   const currentLeagues = filteredLeagues.slice(indexOfFirstLeague, indexOfLastLeague);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     setCurrentPage(1); // Reset to the first page whenever filters change
//   }, [filters]);

//   return (
//     <Container fluid className="explore-container">
//       <h2 className="explore-title">Explore Our Competitions</h2>
//       <Row>
//         <Col md={3}>
//           <div className="filters">
//             <h4>Filters</h4>
//             <Form>
//               <h5>Competition Level</h5>
//               <Form.Check type="checkbox" label="Competitive" onChange={() => handleFilterChange('competitionLevels', 'Competitive')} />
//               <Form.Check type="checkbox" label="Recreational" onChange={() => handleFilterChange('competitionLevels', 'Recreational')} />

//               <h5>Age Group</h5>
//               <Form.Check type="checkbox" label="Adult (18+)" onChange={() => handleFilterChange('ageGroups', 'Adult')} />
//               <Form.Check type="checkbox" label="Teenager (13-17)" onChange={() => handleFilterChange('ageGroups', 'Teenager')} />
//               <Form.Check type="checkbox" label="Kids (8-12)" onChange={() => handleFilterChange('ageGroups', 'Kids')} />

//               <h5>Gender</h5>
//               <Form.Check type="checkbox" label="Male" onChange={() => handleFilterChange('genders', 'Male')} />
//               <Form.Check type="checkbox" label="Female" onChange={() => handleFilterChange('genders', 'Female')} />

//               <h5>Day of the Week</h5>
//               <Form.Check type="checkbox" label="Monday" onChange={() => handleFilterChange('daysOfWeek', 'Monday')} />
//               <Form.Check type="checkbox" label="Tuesday" onChange={() => handleFilterChange('daysOfWeek', 'Tuesday')} />
//               <Form.Check type="checkbox" label="Wednesday" onChange={() => handleFilterChange('daysOfWeek', 'Wednesday')} />
//               <Form.Check type="checkbox" label="Thursday" onChange={() => handleFilterChange('daysOfWeek', 'Thursday')} />
//               <Form.Check type="checkbox" label="Friday" onChange={() => handleFilterChange('daysOfWeek', 'Friday')} />
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
//                     <Card.Title className="card-title">
//                       <Link to={`/league/${league.id}`}>{league.name}</Link>
//                     </Card.Title>
//                     <Card.Text className="card-text">{league.competition} - {league.day}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//           <Pagination className="justify-content-center">
//             {Array.from({ length: Math.ceil(filteredLeagues.length / leaguesPerPage) }, (_, i) => (
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


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Card, Pagination } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import leaguesData from '../data/LeaguesData'; // Import the data
// import '../styles/ExploreCompetitions.css';

// const ExploreCompetitions = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     competitive: true,
//     recreational: true,
//     adult: true,
//     teenager: true,
//     kids: true,
//     male: true,
//     female: true,
//     monday: true,
//     tuesday: true,
//     wednesday: true,
//     thursday: true,
//     friday: true,
//   });

//   const leaguesPerPage = 9;
//   const indexOfLastLeague = currentPage * leaguesPerPage;
//   const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;

//   const handleFilterChange = (filterCategory, value) => {
//     setFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters };
//       updatedFilters[value] = !prevFilters[value];

//       const categoryKeys = {
//         competition: ['competitive', 'recreational'],
//         ageGroup: ['adult', 'teenager', 'kids'],
//         gender: ['male', 'female'],
//         dayOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
//       };

//       const isAllUnchecked = categoryKeys[filterCategory].every((key) => !updatedFilters[key]);
//       if (isAllUnchecked) {
//         categoryKeys[filterCategory].forEach((key) => (updatedFilters[key] = true));
//       }

//       return updatedFilters;
//     });
//     setCurrentPage(1); // Reset to the first page on filter change
//   };

//   const applyFilters = () => {
//     return leaguesData.filter((league) => {
//       const competitionMatches =
//         (filters.competitive && league.competition === 'Competitive') ||
//         (filters.recreational && league.competition === 'Recreational');

//       const ageGroupMatches =
//         (filters.adult && league.ageGroup === 'Adult') ||
//         (filters.teenager && league.ageGroup === 'Teenager') ||
//         (filters.kids && league.ageGroup === 'Kids');

//       const genderMatches =
//         (filters.male && league.gender === 'Male') ||
//         (filters.female && league.gender === 'Female');

//       const dayMatches =
//         (filters.monday && league.day === 'Monday') ||
//         (filters.tuesday && league.day === 'Tuesday') ||
//         (filters.wednesday && league.day === 'Wednesday') ||
//         (filters.thursday && league.day === 'Thursday') ||
//         (filters.friday && league.day === 'Friday');

//       return competitionMatches && ageGroupMatches && genderMatches && dayMatches;
//     });
//   };

//   const filteredLeagues = applyFilters();
//   const currentLeagues = filteredLeagues.slice(indexOfFirstLeague, indexOfLastLeague);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     setCurrentPage(1); // Reset to the first page whenever filters change
//   }, [filters]);

//   return (
//     <Container fluid className="explore-container">
//       <h2 className="explore-title">Explore Our Competitions</h2>
//       <Row>
//         <Col md={3}>
//           <div className="filters">
//             <h4>Filters</h4>
//             <Form>
//               <h5>Competition Level</h5>
//               <Form.Check type="checkbox" label="Competitive" onChange={() => handleFilterChange('competition', 'competitive')} checked={filters.competitive} />
//               <Form.Check type="checkbox" label="Recreational" onChange={() => handleFilterChange('competition', 'recreational')} checked={filters.recreational} />

//               <h5>Age Group</h5>
//               <Form.Check type="checkbox" label="Adult (18+)" onChange={() => handleFilterChange('ageGroup', 'adult')} checked={filters.adult} />
//               <Form.Check type="checkbox" label="Teenager (13-17)" onChange={() => handleFilterChange('ageGroup', 'teenager')} checked={filters.teenager} />
//               <Form.Check type="checkbox" label="Kids (8-12)" onChange={() => handleFilterChange('ageGroup', 'kids')} checked={filters.kids} />

//               <h5>Gender</h5>
//               <Form.Check type="checkbox" label="Male" onChange={() => handleFilterChange('gender', 'male')} checked={filters.male} />
//               <Form.Check type="checkbox" label="Female" onChange={() => handleFilterChange('gender', 'female')} checked={filters.female} />

//               <h5>Day of the Week</h5>
//               <Form.Check type="checkbox" label="Monday" onChange={() => handleFilterChange('dayOfWeek', 'monday')} checked={filters.monday} />
//               <Form.Check type="checkbox" label="Tuesday" onChange={() => handleFilterChange('dayOfWeek', 'tuesday')} checked={filters.tuesday} />
//               <Form.Check type="checkbox" label="Wednesday" onChange={() => handleFilterChange('dayOfWeek', 'wednesday')} checked={filters.wednesday} />
//               <Form.Check type="checkbox" label="Thursday" onChange={() => handleFilterChange('dayOfWeek', 'thursday')} checked={filters.thursday} />
//               <Form.Check type="checkbox" label="Friday" onChange={() => handleFilterChange('dayOfWeek', 'friday')} checked={filters.friday} />
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
//                     <Card.Title className="card-title">
//                       <Link to={`/league/${league.id}`}>{league.name}</Link>
//                     </Card.Title>
//                     <Card.Text className="card-text">{league.competition} - {league.day}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//           <Pagination className="justify-content-center">
//             {Array.from({ length: Math.ceil(filteredLeagues.length / leaguesPerPage) }, (_, i) => (
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


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Card, Pagination } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import leaguesData from '../data/LeaguesData'; // Import the data
// import '../styles/ExploreCompetitions.css';

// const ExploreCompetitions = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     competitive: false,
//     recreational: false,
//     adult: false,
//     teenager: false,
//     kids: false,
//     male: false,
//     female: false,
//     monday: false,
//     tuesday: false,
//     wednesday: false,
//     thursday: false,
//     friday: false,
//   });

//   const leaguesPerPage = 9;
//   const indexOfLastLeague = currentPage * leaguesPerPage;
//   const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;

//   const handleFilterChange = (filterCategory, value) => {
//     setFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters };
//       updatedFilters[value] = !prevFilters[value];

//       return updatedFilters;
//     });
//     setCurrentPage(1); // Reset to the first page on filter change
//   };

//   const applyFilters = () => {
//     const competitionLevels = !filters.competitive && !filters.recreational;
//     const ageGroups = !filters.adult && !filters.teenager && !filters.kids;
//     const genders = !filters.male && !filters.female;
//     const daysOfWeek = !filters.monday && !filters.tuesday && !filters.wednesday && !filters.thursday && !filters.friday;

//     return leaguesData.filter((league) => {
//       const competitionMatches =
//         competitionLevels ||
//         (filters.competitive && league.competition === 'Competitive') ||
//         (filters.recreational && league.competition === 'Recreational');

//       const ageGroupMatches =
//         ageGroups ||
//         (filters.adult && league.ageGroup === 'Adult') ||
//         (filters.teenager && league.ageGroup === 'Teenager') ||
//         (filters.kids && league.ageGroup === 'Kids');

//       const genderMatches =
//         genders ||
//         (filters.male && league.gender === 'Male') ||
//         (filters.female && league.gender === 'Female');

//       const dayMatches =
//         daysOfWeek ||
//         (filters.monday && league.day === 'Monday') ||
//         (filters.tuesday && league.day === 'Tuesday') ||
//         (filters.wednesday && league.day === 'Wednesday') ||
//         (filters.thursday && league.day === 'Thursday') ||
//         (filters.friday && league.day === 'Friday');

//       return competitionMatches && ageGroupMatches && genderMatches && dayMatches;
//     });
//   };

//   const filteredLeagues = applyFilters();
//   const currentLeagues = filteredLeagues.slice(indexOfFirstLeague, indexOfLastLeague);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     setCurrentPage(1); // Reset to the first page whenever filters change
//   }, [filters]);

//   return (
//     <Container fluid className="explore-container">
//       <h2 className="explore-title">Explore Our Competitions</h2>
//       <Row>
//         <Col md={3}>
//           <div className="filters">
//             <h4>Filters</h4>
//             <Form>
//               <h5>Competition Level</h5>
//               <Form.Check type="checkbox" label="Competitive" onChange={() => handleFilterChange('competition', 'competitive')} checked={filters.competitive} />
//               <Form.Check type="checkbox" label="Recreational" onChange={() => handleFilterChange('competition', 'recreational')} checked={filters.recreational} />

//               <h5>Age Group</h5>
//               <Form.Check type="checkbox" label="Adult (18+)" onChange={() => handleFilterChange('ageGroup', 'adult')} checked={filters.adult} />
//               <Form.Check type="checkbox" label="Teenager (13-17)" onChange={() => handleFilterChange('ageGroup', 'teenager')} checked={filters.teenager} />
//               <Form.Check type="checkbox" label="Kids (8-12)" onChange={() => handleFilterChange('ageGroup', 'kids')} checked={filters.kids} />

//               <h5>Gender</h5>
//               <Form.Check type="checkbox" label="Male" onChange={() => handleFilterChange('gender', 'male')} checked={filters.male} />
//               <Form.Check type="checkbox" label="Female" onChange={() => handleFilterChange('gender', 'female')} checked={filters.female} />

//               <h5>Day of the Week</h5>
//               <Form.Check type="checkbox" label="Monday" onChange={() => handleFilterChange('dayOfWeek', 'monday')} checked={filters.monday} />
//               <Form.Check type="checkbox" label="Tuesday" onChange={() => handleFilterChange('dayOfWeek', 'tuesday')} checked={filters.tuesday} />
//               <Form.Check type="checkbox" label="Wednesday" onChange={() => handleFilterChange('dayOfWeek', 'wednesday')} checked={filters.wednesday} />
//               <Form.Check type="checkbox" label="Thursday" onChange={() => handleFilterChange('dayOfWeek', 'thursday')} checked={filters.thursday} />
//               <Form.Check type="checkbox" label="Friday" onChange={() => handleFilterChange('dayOfWeek', 'friday')} checked={filters.friday} />
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
//                     <Card.Title className="card-title">
//                       <Link to={`/league/${league.id}`}>{league.name}</Link>
//                     </Card.Title>
//                     <Card.Text className="card-text">{league.competition} - {league.day}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//           <Pagination className="justify-content-center">
//             {Array.from({ length: Math.ceil(filteredLeagues.length / leaguesPerPage) }, (_, i) => (
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
    competitive: false,
    recreational: false,
    adult: false,
    teenager: false,
    kids: false,
    male: false,
    female: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
  });

  const leaguesPerPage = 9;
  const indexOfLastLeague = currentPage * leaguesPerPage;
  const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;

  const handleFilterChange = (filterCategory, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      updatedFilters[value] = !prevFilters[value];

      return updatedFilters;
    });
    setCurrentPage(1); // Reset to the first page on filter change
  };

  const applyFilters = () => {
    const competitionLevels = !filters.competitive && !filters.recreational;
    const ageGroups = !filters.adult && !filters.teenager && !filters.kids;
    const genders = !filters.male && !filters.female;
    const daysOfWeek = !filters.monday && !filters.tuesday && !filters.wednesday && !filters.thursday && !filters.friday;

    return leaguesData.filter((league) => {
      const competitionMatches =
        competitionLevels ||
        (filters.competitive && league.competition === 'Competitive') ||
        (filters.recreational && league.competition === 'Recreational');

      const ageGroupMatches =
        ageGroups ||
        (filters.adult && league.ageGroup === 'Adult') ||
        (filters.teenager && league.ageGroup === 'Teenager') ||
        (filters.kids && league.ageGroup === 'Kids');

      const genderMatches =
        genders ||
        (filters.male && league.gender === 'Male') ||
        (filters.female && league.gender === 'Female');

      const dayMatches =
        daysOfWeek ||
        (filters.monday && league.day === 'Monday') ||
        (filters.tuesday && league.day === 'Tuesday') ||
        (filters.wednesday && league.day === 'Wednesday') ||
        (filters.thursday && league.day === 'Thursday') ||
        (filters.friday && league.day === 'Friday');

      return competitionMatches && ageGroupMatches && genderMatches && dayMatches;
    });
  };

  const filteredLeagues = applyFilters();
  const currentLeagues = filteredLeagues.slice(indexOfFirstLeague, indexOfLastLeague);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page whenever filters change
  }, [filters]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <Container fluid className="explore-container">
      <h2 className="explore-title">Explore Our Competitions</h2>
      <Row>
        <Col md={3}>
          <div className="filters">
            <h4>Filters</h4>
            <Form>
              <h5>Competition Level</h5>
              <Form.Check type="checkbox" label="Competitive" onChange={() => handleFilterChange('competition', 'competitive')} checked={filters.competitive} />
              <Form.Check type="checkbox" label="Recreational" onChange={() => handleFilterChange('competition', 'recreational')} checked={filters.recreational} />

              <h5>Age Group</h5>
              <Form.Check type="checkbox" label="Adult (18+)" onChange={() => handleFilterChange('ageGroup', 'adult')} checked={filters.adult} />
              <Form.Check type="checkbox" label="Teenager (13-17)" onChange={() => handleFilterChange('ageGroup', 'teenager')} checked={filters.teenager} />
              <Form.Check type="checkbox" label="Kids (8-12)" onChange={() => handleFilterChange('ageGroup', 'kids')} checked={filters.kids} />

              <h5>Gender</h5>
              <Form.Check type="checkbox" label="Male" onChange={() => handleFilterChange('gender', 'male')} checked={filters.male} />
              <Form.Check type="checkbox" label="Female" onChange={() => handleFilterChange('gender', 'female')} checked={filters.female} />

              <h5>Day of the Week</h5>
              <Form.Check type="checkbox" label="Monday" onChange={() => handleFilterChange('dayOfWeek', 'monday')} checked={filters.monday} />
              <Form.Check type="checkbox" label="Tuesday" onChange={() => handleFilterChange('dayOfWeek', 'tuesday')} checked={filters.tuesday} />
              <Form.Check type="checkbox" label="Wednesday" onChange={() => handleFilterChange('dayOfWeek', 'wednesday')} checked={filters.wednesday} />
              <Form.Check type="checkbox" label="Thursday" onChange={() => handleFilterChange('dayOfWeek', 'thursday')} checked={filters.thursday} />
              <Form.Check type="checkbox" label="Friday" onChange={() => handleFilterChange('dayOfWeek', 'friday')} checked={filters.friday} />
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
