import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({ title }) => (
  <header className="header-con" id="topPage">
    <Container fluid>
      <Navbar expand="md" variant="light">
        <Navbar.Brand href="/" className="font-weight-bold">RMD Holistics</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/" className="nav-link" activeClassName="active">
                About
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/" className="nav-link" activeClassName="active">
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/

export default Header
