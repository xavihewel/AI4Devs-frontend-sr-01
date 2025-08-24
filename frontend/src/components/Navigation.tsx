import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { 
  House, 
  PersonPlus, 
  Briefcase, 
  People,
  Gear
} from 'react-bootstrap-icons';
import logo from '../assets/lti-logo.png';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard" className="d-flex align-items-center">
          <img 
            src={logo} 
            alt="LTI Logo" 
            style={{ width: '30px', marginRight: '10px' }} 
          />
          LTI Talent Tracking
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/dashboard" 
              className={isActive('/dashboard') ? 'active' : ''}
            >
              <House className="me-1" />
              Dashboard
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/add-candidate" 
              className={isActive('/add-candidate') ? 'active' : ''}
            >
              <PersonPlus className="me-1" />
              Añadir Candidato
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/positions" 
              className={isActive('/positions') ? 'active' : ''}
            >
              <Briefcase className="me-1" />
              Posiciones
            </Nav.Link>
          </Nav>
          
          <Nav>
            <NavDropdown 
              title={<><Gear className="me-1" />Configuración</>} 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#profile">Mi Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Configuración</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Cerrar Sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
