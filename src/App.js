import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextFormat from "./TextFormat";
import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import LinkedIn from './img/linkedin.png'
import github from './img/GitHub.png'
import Skills from "./Skills";
import useDarkMode from "./darkmode";
import Button from "react-bootstrap/Button";



function App() {

  const {isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    
    <div className={`App ${isDarkMode ? 'darkmode' : ''}`} >
      <Navbar sticky="top" key={"md"} expand={"md"} className="bg-body-tertiary mb-3" data-bs-theme={`${isDarkMode ? 'dark' : ''}`} >
        <Container fluid>
          <Navbar.Brand href="#">
            <h1>Portfolio</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            className={`${isDarkMode ? 'text-bg-dark' : ''}`}
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  
                </Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/skills">Skills</Nav.Link>
                <Nav.Link href="/textformat">Text Formatting</Nav.Link>
                <NavDropdown
                  title="Contact Me"
                  id={`offcanvasNavbarDropdown-expand-md`}
                  className={`${isDarkMode ? 'dropdown-menu-dark' : ''}`}
                >
                  <NavDropdown.Item  href="https://github.com/Blvcko13"><img src={github} alt="github logo" width="30px"/>Blvcko13</NavDropdown.Item>
                  <NavDropdown.Item href="www.linkedin.com/in/javokhjakhon2202">
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
              <Nav>
      <Button variant="outline-secondary" onClick={toggleDarkMode}>Dark Mode </Button> 
      </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/textformat" element={<TextFormat />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<AboutMe />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
