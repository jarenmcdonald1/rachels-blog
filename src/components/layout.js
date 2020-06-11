import React from "react"

import Header from '../components/Header.js'
//import { rhythm, scale } from "../utils/typography"
import '../styles/index.scss'

const Layout = ({ title, children }) => {

  return (
    <>
      <Header siteTitle={title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
