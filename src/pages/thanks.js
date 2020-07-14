import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Card } from "react-bootstrap"
import '../styles/index.scss'

const ThanksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Thank You" />
      <Row className="justify-content-center align-items-center">
        <Card className="text-center" style={{maxWidth:'450px'}}>
            <Card.Body>
                <Card.Title className="display-4">Thank You!</Card.Title>
                <Card.Text>I have received your message and will send you a response as soon as I can!</Card.Text>
                <Link to='/' className="btn btn-lg btn-info">Back to home</Link>
            </Card.Body>
        </Card>
      </Row>
    </Layout>
  )
}

export default ThanksPage

export const blogPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`