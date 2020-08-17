import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
//import PropTypes from "prop-types"
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      headerLogo: file(absolutePath: { regex: "/rmd-logo.png/" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <header className="header-con overflow-hidden" id="topPage">
      <Container fluid>
        <Navbar className="py-0" expand="md" variant="light">
          <Navbar.Brand href="/" className="w-100 py-0" style={{maxWidth:'200px'}}>
            <Img fluid={data.headerLogo.childImageSharp.fluid} alt="rmd holistics" className="w-100 h-100 logoImg" style={{width:'300px'}} fadeIn />
            <span className="sr-only">RMD Holistics</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" className="border-secondary rounded-lg" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li" className="py-3 py-md-0 px-md-2 text-center navItemStyle">
                <Link to="/#aboutCon" className="nav-link" activeClassName="active">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item as="li" className="py-3 py-md-0 px-md-2 text-center navItemStyle">
                <Link to="/#servicesCon" className="nav-link" activeClassName="active">
                  Services
                </Link>
              </Nav.Item>
              <Nav.Item as="li" className="py-3 py-md-0 px-md-2 text-center navItemStyle">
                <Link to="/blog" className="nav-link" activeClassName="active">
                  Blog
                </Link>
              </Nav.Item>
              <Nav.Item as="li" className="py-3 py-md-0 px-md-2 text-center navItemStyle">
                <Link to="/contact" className="nav-link" activeClassName="active">
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/

export default Header