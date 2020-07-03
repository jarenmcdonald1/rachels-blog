import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Card } from "react-bootstrap"
import '../styles/index.scss'
import contactInfo from '../../site/settings/contact_info.json'

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <Row>
        <Card className="w-100">
          <Card.Body>
            <Card.Text>Contact me <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`