//import { Link } from "gatsby"
import React from "react"
import { Container, Row } from 'react-bootstrap';
import '../styles/index.scss'

const Footer = () => (
  <footer className="bg-secondary">
    <Container>
      <Row className="py-3 justify-content-center">
        <span class="copyright-text">© {new Date().getFullYear()} Rachel McDonald</span>
      </Row>
    </Container>
  </footer>
)

export default Footer
