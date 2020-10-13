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
            <Link to={node.fields.slug} className="blogListPost w-100 h-100 mb-3 mb-sm-5">
              <Card className="bg-dark border-0 text-white">
                <Img className="card-img w-100 h-100 blogListPostImg" objectFit fadeIn fluid={node.frontmatter.thumbnail.childImageSharp.fluid} alt={node.frontmatter.title} />
                <Card.ImgOverlay>
                  <div className="w-100 h-100 px-sm-3 d-flex align-items-center justify-content-center flex-column text-center blogListPostBackground rounded-lg">
                    <Card.Title className="mb-1 text-white">
                        {title}
                    </Card.Title>
                    <Card.Text className="mb-1">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </Card.Text>
                    <Card.Subtitle className="pb-2">{node.frontmatter.date}</Card.Subtitle>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Link>
          )
        })}

      </Row>

      <Row>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="d-none blogListPost">
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