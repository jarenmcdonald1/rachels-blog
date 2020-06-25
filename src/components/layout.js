import React from "react"

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container } from 'react-bootstrap';
import '../styles/index.scss'

const Layout = ({ title, children }) => {

  return (
    <>
      <Header siteTitle={title} />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
