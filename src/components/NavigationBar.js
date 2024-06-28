import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/NavigationBar.css';
import logo from '../assets/logo.png';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Ottawa Soccer Champions League Logo"
        />
        <span className="brand-name">Ottawa Soccer Champions League</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-links">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/explore">Explore Competitions</Nav.Link>
          <Nav.Link href="/registration">Register</Nav.Link>
          <Nav.Link href="/news">News</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
