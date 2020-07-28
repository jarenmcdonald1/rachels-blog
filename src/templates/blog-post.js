import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Card } from 'react-bootstrap'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Row className="d-none mb-3 mb-md-4 blogBannerCon">
        <Card className="w-100 border-0 text-white">
          <Img fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid} alt={post.frontmatter.title} className="card-img blogBannerImg" fadeIn />
          <Card.ImgOverlay className="text-center">
            <Card.Title className="blogBannerText display-4 font-weight-bold text-shadow">{post.frontmatter.title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Row>

      <Row className="mb-3 mb-md-4 blogBannerCon">
        <Img fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid} alt={post.frontmatter.title} className="blogBannerImg rounded" fadeIn />
        <div className="blogBannerText d-flex align-items-center justify-content-center py-3 px-sm-3 px-lg-5">
          <h4 className="display-4 text-white text-center font-weight-bold text-shadow">{post.frontmatter.title}</h4>
        </div>
      </Row>

      <Row className="mb-3 mb-md-4 mb-lg-5">
        <section className="w-100 border-bottom">
          <p className="lead">{post.frontmatter.date}</p>
        </section>
      </Row>

      <Row>
        <article>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Row>

      <nav>
        <ul className="py-4 py-md-5 d-flex flex-wrap justify-content-between list-unstyled">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="btn btn-outline-info rounded-pill">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next" className="btn btn-outline-info rounded-pill">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
