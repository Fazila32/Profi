import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./lightNav.css";
import Scrollspy from "react-scrollspy";

function Navbarlight() {
  return (
    <div className="container-fluid bg-white light-nav ">
      <div className="container ">
        <Scrollspy
          items={["about", "ourwork", "services", "contact"]}
          currentClassName="iscurrent"
        >
          <Navbar
            variant="light"
            sticky="top"
            expand="lg"
            collapseOnSelect
            fixed="top"
            className="py-3 z-index-1 scrollclass"
          >
            <Navbar.Brand className="me-0 text-uppercase fw-bold fs-2 profi">
              Profi
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav className="ms-auto text-uppercase nav-text fw-bold">
                <Nav.Link className=" mx-3" href="#about">
                  About
                </Nav.Link>
                <Nav.Link className=" mx-3" href="#services">
                  Services
                </Nav.Link>
                <Nav.Link className=" mx-3" href="#whyus">
                  why choose us
                </Nav.Link>
                <Nav.Link className=" mx-3" href="#ourwork">
                  our work
                </Nav.Link>
                <Nav.Link className=" mx-3" href="#testimonial">
                  testimonials
                </Nav.Link>
                <Nav.Link className=" ms-3" href="#contact">
                  contacts
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Scrollspy>
      </div>
    </div>
  );
}

export default Navbarlight;
