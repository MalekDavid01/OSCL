import React, { useState, useRef } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import leaguesData from '../data/LeaguesData';
import '../styles/LeagueDetail.css';

const LeagueDetail = () => {
  const { id } = useParams();
  const league = leaguesData.find((l) => l.id === parseInt(id));
  const contactFormRef = useRef(null);

  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedManagerEmail, setSelectedManagerEmail] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactManager = (email) => {
    setSelectedManagerEmail(email);
    setShowContactForm(true);
    setTimeout(() => {
      if (contactFormRef.current) {
        contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSendEmail = () => {
    // Here you would typically handle sending the email
    console.log(`Sending email to: ${selectedManagerEmail}`);
    console.log(`From: ${userEmail}`);
    console.log(`Message: ${message}`);
  };

  const teams = [
    { name: 'Team A', manager: { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' } },
    { name: 'Team B', manager: { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' } },
    { name: 'Team C', manager: { firstName: 'Joe', lastName: 'Darrel', email: 'joe.darrel@example.com' } },
    { name: 'Team D', manager: { firstName: 'Jack', lastName: 'Hay', email: 'jack.hay@example.com' } },
    { name: 'Team E', manager: { firstName: 'Jasper', lastName: 'Keith', email: 'jasper.keith@example.com' } },
    { name: 'Team F', manager: { firstName: 'Harry', lastName: 'White', email: 'harry.white@example.com' } },
    { name: 'Team G', manager: { firstName: 'Bob', lastName: 'Blake', email: 'bob.blake@example.com' } },
    { name: 'Team H', manager: { firstName: 'Alfred', lastName: 'Francis', email: 'alfred.francis@example.com' } },
    // Add more teams as needed
  ];

  return (
    <Container fluid className="league-detail-container">
      <h2 className="league-title">{league.name}</h2>
      <p className="league-description">Details about the league...</p>

      <div className="table-container">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Manager First Name</th>
              <th>Manager Last Name</th>
              <th>Manager Email</th>
              <th>Contact Manager</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{team.name}</td>
                <td>{team.manager.firstName}</td>
                <td>{team.manager.lastName}</td>
                <td>{team.manager.email}</td>
                <td>
                  <Button variant="dark" className="btn-contact-manager" onClick={() => handleContactManager(team.manager.email)}>
                    Contact Manager
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {showContactForm && (
        <div id="contact-form" ref={contactFormRef} className="contact-form">
          <h3>Contact Manager</h3>
          <Form>
            <Form.Group controlId="managerEmail">
              <Form.Label>Manager's Email</Form.Label>
              <Form.Control type="email" value={selectedManagerEmail} readOnly />
            </Form.Group>
            <Form.Group controlId="userEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button variant="dark" onClick={handleSendEmail}>
              Send
            </Button>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default LeagueDetail;
