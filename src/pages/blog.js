import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Card } from "react-bootstrap"
import '../styles/index.scss'

const BlogMain = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Row>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="blogListPost mb-3 mb-md-4 mb-lg-5">
              <Card key={node.fields.slug} className="w-100 h-100">
                <Link to={node.fields.slug}>
                  <Img className="card-img blogListPostImg" objectFit fadeIn fluid={node.frontmatter.thumbnail.childImageSharp.fluid} alt={node.frontmatter.title} />
                </Link>
                <Card.Body>
                  <Card.Title>
                    <Link to={node.fields.slug} className="text-dark h4">
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
                  <Link to={node.fields.slug} className="btn btn-outline-info rounded-pill">Read more</Link>
                </Card.Body>
              </Card>
            </div>
          )
        })}

      </Row>
    </Layout>
  )
}

export default BlogMain

export const blogPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`