// // src/components/Footer.js
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import '../styles/Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col md={4}>
//             <h5>League Information</h5>
//             <p>
//               Ottawa Soccer Champions League (OSCL) hosts various competitive and recreational soccer leagues for all ages. Join us for a season full of excitement, skill-building, and camaraderie.
//             </p>
//           </Col>
//           <Col md={2}>
//             <h5>Quick Links</h5>
//             <ul>
//               <li><a href="/explore">Explore Competitions</a></li>
//               <li><a href="/register">Register</a></li>
//               <li><a href="/news">News</a></li>
//               <li><a href="/about">About Us</a></li>
//               <li><a href="/contact">Contact Us</a></li>
//             </ul>
//           </Col>
//           <Col md={3}>
//             <h5>Contact Us</h5>
//             <p>
//               <FontAwesomeIcon icon={faPhone} /> +1 (613) 111-2222 <br />
//               <FontAwesomeIcon icon={faEnvelope} /> email@oscl.ca <br />
//               <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Soccer St, Ottawa, ON
//             </p>
//           </Col>
//           <Col md={3}>
//             <h5>Follow Us</h5>
//             <div className="social-icons">
//               <a href="/" onClick={() => window.location.reload()}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
//               <a href="/" onClick={() => window.location.reload()}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
//               <a href="/" onClick={() => window.location.reload()}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
//               <a href="/" onClick={() => window.location.reload()}><FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-center mt-3">
//             <p>© 2024 Ottawa Soccer Champions League. All Rights Reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>League Information</h5>
            <p>
              Ottawa Soccer Champions League (OSCL) hosts various competitive and recreational soccer leagues for all ages. Join us for a season full of excitement, skill-building, and camaraderie.
            </p>
          </Col>
          <Col md={2}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/explore-competitions">Explore Competitions</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/about-us">About Us</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +1 (613) 111-2222 <br />
              <FontAwesomeIcon icon={faEnvelope} /> email@oscl.ca <br />
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Soccer St, Ottawa, ON
            </p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="/" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
              <a href="/" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
              <a href="/" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
              <a href="/" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>© 2024 Ottawa Soccer Champions League. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
