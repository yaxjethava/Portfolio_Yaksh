import React, { useState, useEffect } from "react";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Collapse navbar after clicking a link
  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <BSNavbar.Brand href="#home" className="brand-name">
          Yaksh Jethava
        </BSNavbar.Brand>

        <BSNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={handleNavClick}>
              <FaHome className="nav-icon" /> Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleNavClick}>
              <FaUser className="nav-icon" /> About
            </Nav.Link>
            <Nav.Link href="#skills" onClick={handleNavClick}>
              <FaCode className="nav-icon" /> Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick}>
              <FaBriefcase className="nav-icon" /> Projects
            </Nav.Link>
            <Nav.Link href="#experience" onClick={handleNavClick}>
              <FaGraduationCap className="nav-icon" /> Education
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick}>
              <FaEnvelope className="nav-icon" /> Contact
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
