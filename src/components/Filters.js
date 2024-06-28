import React from 'react';
import { Accordion, Form, Button, Card } from 'react-bootstrap';

const Filters = ({ filters, setFilters }) => {
  const handleCompetitionChange = (e) => {
    const { value, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      competition: checked ? [...prev.competition, value] : prev.competition.filter(c => c !== value),
    }));
  };

  const handleAgeGroupChange = (e) => {
    const { value, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      ageGroup: checked ? [...prev.ageGroup, value] : prev.ageGroup.filter(a => a !== value),
    }));
  };

  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFilters(prev => ({
      ...prev,
      gender: value,
      days: [],
    }));
  };

  const handleDaysChange = (e) => {
    const { value, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      days: checked ? [...prev.days, value] : prev.days.filter(d => d !== value),
    }));
  };

  const getDaysOptions = () => {
    if (filters.gender === 'Male') {
      return ['Monday', 'Wednesday', 'Friday'];
    } else if (filters.gender === 'Female') {
      return ['Tuesday', 'Thursday', 'Saturday'];
    }
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  };

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Competition Level
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form.Check 
              type="checkbox"
              label="Competitive"
              value="Competitive"
              onChange={handleCompetitionChange}
            />
            <Form.Check 
              type="checkbox"
              label="Recreational"
              value="Recreational"
              onChange={handleCompetitionChange}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Age Group
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Form.Check 
              type="checkbox"
              label="Adult (18+)"
              value="Adult"
              onChange={handleAgeGroupChange}
            />
            <Form.Check 
              type="checkbox"
              label="Teenager (13-17)"
              value="Teenager"
              onChange={handleAgeGroupChange}
            />
            <Form.Check 
              type="checkbox"
              label="Kids (8-12)"
              value="Kids"
              onChange={handleAgeGroupChange}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Gender
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Form.Check 
              type="radio"
              label="Male"
              name="gender"
              value="Male"
              onChange={handleGenderChange}
            />
            <Form.Check 
              type="radio"
              label="Female"
              name="gender"
              value="Female"
              onChange={handleGenderChange}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
          Days
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            {getDaysOptions().map(day => (
              <Form.Check 
                type="checkbox"
                key={day}
                label={day}
                value={day}
                onChange={handleDaysChange}
              />
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Filters;
