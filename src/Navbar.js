import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import LinkedIn from './img/linkedin.png'
import github from './img/GitHub.png'

function NavbarIs()  {
    
    return (
    <div className="App">
      <Navbar key={"md"} expand={"md"} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <h1>My Project</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  
                </Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutme">About Me</Nav.Link>
                <NavDropdown
                  title="Contact Me"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item  href="https://github.com/Blvcko13"><img src={github} alt="github logo" width="30px"/>Blvcko13</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.linkedin.com/in/javokhirjon-jakhonkulov-160b98204/">
                  <img src={
                    LinkedIn
                  } alt="Linkedin logo" width="35px"/>Jakhonkulov Javokhirjon
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/contactme">
                    My Contacts
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavbarIs;
