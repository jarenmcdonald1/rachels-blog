import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Card, Button } from "react-bootstrap"
import '../styles/index.scss'
//import contactInfo from '../../site/settings/contact_info.json'

//{contactInfo.email}

const BlogMain = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Container fluid>
        <Row>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="col-12 col-lg-4 mb-3 mb-lg-0">
              <Card key={node.fields.slug} className="w-100 h-100">
                <Card.Body>
                  <Card.Title>
                    <Link to={node.fields.slug} className="text-dark h3">
                        {title}
                    </Link>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 pb-2 border-bottom text-muted">{node.frontmatter.date}</Card.Subtitle>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                  <Button variant="success"><Link to={node.fields.slug} className="text-white text-decoration-none">Read more</Link></Button>
                </Card.Body>
              </Card>
            </div>
          )
        })}

        </Row>
      </Container>
    </Layout>
  )
}

export default BlogMain

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC},) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`