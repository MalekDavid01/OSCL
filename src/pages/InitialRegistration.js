// // src/pages/InitialRegistration.js
// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '../styles/Register.css';

// const InitialRegistration = () => {
//   return (
//     <Container fluid className="register-container">
//       <h2 className="register-title">Choose Registration Type</h2>
//       <Row className="justify-content-center">
//         <Col md={6} className="text-center">
//           <Link to="/register/team">
//             <Button variant="dark" className="mt-3">
//               Register Your Team
//             </Button>
//           </Link>
//           <Link to="/register/individual">
//             <Button variant="dark" className="mt-3 ml-3">
//               Register as an Individual
//             </Button>
//           </Link>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default InitialRegistration;



import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/InitialRegistration.css';

import teamImage from '../assets/team.png';
import individualImage from '../assets/individual.webp';

const InitialRegistration = () => {
  return (
    <Container fluid className="initial-registration-container">
      <h2 className="registration-title">Choose Registration Type</h2>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="mb-4 registration-card">
            <Card.Img variant="top" src={teamImage} alt="Register Your Team" className="registration-card-img" />
            <Card.Body>
            <Link to="/register/team">
              <Button variant="dark" className="w-100">
                Register Your Team
              </Button>
            </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="mb-4 registration-card">
            <Card.Img variant="top" src={individualImage} alt="Register as an Individual" className="registration-card-img" />
            <Card.Body>
            <Link to="/register/individual">
              <Button variant="dark" className="w-100">
                Register as an Individual
              </Button>
            </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InitialRegistration;
