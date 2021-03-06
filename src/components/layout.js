import React from "react"

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Subscribe from "../components/Subscribe"
import { Container } from 'react-bootstrap';
import '../styles/index.scss'

const Layout = ({ title, children }) => {

  return (
    <>
      <Header siteTitle={title} />
      <Container id="content" className="pb-3 pb-md-4 pb-lg-5">
        <main className="container">{children}</main>
      </Container>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Layout