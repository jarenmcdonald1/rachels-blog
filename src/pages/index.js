import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Card, Col } from "react-bootstrap"
import '../styles/index.scss'
//import contactInfo from '../../site/settings/contact_info.json'

//{contactInfo.email}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      <Row className="mb-4 mb-lg-5">
        <Img className="mb-3 mb-md-0 rounded w-100 indexBannerImg" fluid={data.bannerImg.childImageSharp.fluid} fadeIn objectFit alt="rachel in texas" />
      </Row>

      <Row className="mb-4 mb-lg-5 py-lg-5">
        <Bio />
      </Row>

      <Row className="mb-4 mb-lg-5 py-lg-5">
        <Card className="w-100 border-0">
          <Row>
            <Col md={8} className="d-flex justify-content-center align-items-center pl-md-2">
              <Card.Body>
                <Card.Title className="font-weight-bold text-pink" style={{fontSize: '1.95em'}}>What is RMD Holistics?</Card.Title>
                <Card.Text>RMD Holistics focuses on a complete approach to health and wellness. Our Holistic approach assess issues by digging down to the root of the problem to heal what is underneath the surface.</Card.Text>
                <Card.Text>RMD Holistics is designed to educate people, families, and a special focus on athletes and dancers. I have the experience of the conflict the body feels being pushed without the nutrition your individual body needs and the painful ways the body reacts. THe difference between distress and healthy nutrition is optimal energy and strength.</Card.Text>
                <Card.Text>Combining the demands and effects that dance training has on young dancers with an interactive nutrition workshop will provide dancers, parents and studios with a strong foundation for optimal training and performance.</Card.Text>
                <Card.Text>Learn how to promote overall health and prevent disease!</Card.Text>
              </Card.Body>
            </Col>
            <Col md={4}>
              <Img fluid={data.bannerImg.childImageSharp.fluid} alt="..." objectFit="cover" objectPosition="50% 50%" fadeIn className="w-100 h-100 rounded" />
            </Col>
          </Row>
        </Card>
      </Row>

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
                  <Link to={node.fields.slug} className="btn btn-info">Read more</Link>
                </Card.Body>
              </Card>
            </div>
          )
        })}

      </Row>

      <Row className="justify-content-center py-3 py-lg-4 mb-4 mb-lg-5">
        <Link to='/blog' className="btn btn-lg btn-info">See all blog posts</Link>
      </Row>

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    bannerImg: file(relativePath: { eq: "rachel-texas.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
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