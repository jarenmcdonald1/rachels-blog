import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Card, Col } from "react-bootstrap"
import '../styles/index.scss'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      <Row className="mb-4 mb-lg-5 pb-lg-5 justify-content-center align-item-center">
        <Card className="w-100 border-0 text-white">
          <Img className="card-img mb-3 mb-md-0 rounded w-100 indexBannerImg" fluid={data.bannerImg.childImageSharp.fluid} fadeIn objectFit alt="rachel in texas" />
          <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
            <Card.Title className="display-4 font-weight-bold text-shadow text-center">Fuel your Creativity</Card.Title>
          </Card.ImgOverlay>
        </Card>  
      </Row>

      <Row className="mb-4 mb-lg-5 py-lg-5">
        <Bio />
      </Row>

      <Row id="servicesCon" className="mb-4 mb-lg-5 py-lg-5">
        <Card className="w-100 border-0">
          <Row>
            <Col md={8} className="d-flex justify-content-center align-items-center pr-md-2">
              <Card.Body>
                <Card.Title className="font-weight-bold text-pink" style={{fontSize: '1.95em'}}>What is RMD Holistics?</Card.Title>
                <Card.Text>RMD Holistics focuses on a complete approach to health and wellness. Our Holistic approach assess issues by digging down to the root of the problem to heal what is underneath the surface.</Card.Text>
                <Card.Text>RMD Holistics is designed to educate people, families, and a special focus on athletes and dancers. I have the experience of the conflict the body feels being pushed without the nutrition your individual body needs and the painful ways the body reacts. THe difference between distress and healthy nutrition is optimal energy and strength.</Card.Text>
                <Card.Text>Combining the demands and effects that dance training has on young dancers with an interactive nutrition workshop will provide dancers, parents and studios with a strong foundation for optimal training and performance.</Card.Text>
                <Card.Text>Learn how to promote overall health and prevent disease!</Card.Text>
              </Card.Body>
            </Col>
            <Col md={4}>
              <Img fluid={data.cardImg1.childImageSharp.fluid} alt="..." objectFit="cover" objectPosition="50% 50%" fadeIn className="indexInfoCardImg w-100 h-100 rounded" />
            </Col>
          </Row>
        </Card>
      </Row>

      <Row className="mb-4 mb-lg-5 py-lg-5">
        <Card className="w-100 border-0">
          <Row className="flex-md-row-reverse">
            <Col md={8} className="d-flex justify-content-center align-items-center pl-md-2">
              <Card.Body>
                <Card.Title className="font-weight-bold text-pink" style={{fontSize: '1.95em'}}>Who we work with:</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Dance Studios</li>
                    <li>Dance Companies</li>
                    <li>Athletes</li>
                    <li>Individual Dancers</li>
                    <li>Families &amp; Individuals</li>
                    <li>Everyone</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col md={4}>
              <Img fluid={data.cardImg2.childImageSharp.fluid} alt="..." objectFit="cover" objectPosition="50% 50%" fadeIn className="indexInfoCardImg w-100 h-100 rounded" />
            </Col>
          </Row>
        </Card>
      </Row>

      <Row className="mb-4 mb-lg-5 py-lg-5">
        <Card className="w-100 border-0">
          <Row>
            <Col md={8} className="d-flex justify-content-center align-items-center pr-md-2">
              <Card.Body>
                <Card.Title className="font-weight-bold text-pink" style={{fontSize: '1.95em'}}>What does a Holistic Nutritionist do?</Card.Title>
                <Card.Text>A Holistic Nutritionist works with dancers, athletes, individuals, families, groups, and everyone on ways to improve nutrition, energy, strength and promote health and wellness and prevent disease.</Card.Text>
                <Card.Text>This is achieved by offering the following services:</Card.Text>
                <Card.Text>
                  <ul>
                    <li>Diet and Lifestyle Evaluation</li>
                    <li>Teach Healthy Eating</li>
                    <li>Grocery Store Shopping Tours</li>
                    <li>Family Meal Planning</li>
                    <li>Suggestions for Improving Wellness</li>
                    <li>Suggestions for Managing Stress</li>
                    <li>Meal Plans for improved mood, weight and strength</li>
                    <li>Nutritional Speaker and Workshop Services</li>
                    <li>Personal Client Consultations</li>
                    <li>Advise Clients on Supplementation to aid increased wellness</li>         
                  </ul>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col md={4}>
              <Img fluid={data.cardImg3.childImageSharp.fluid} alt="..." objectFit="cover" objectPosition="50% 50%" fadeIn className="indexInfoCardImg w-100 h-100 rounded" />
            </Col>
          </Row>
        </Card>
      </Row>

      <Row className="mb-2 px-md-3">
        <h3 className="text-pink" style={{fontSize: '1.95em'}}>Latest blog posts:</h3>
      </Row>

      <Row className="mb-1 mb-md-2 mb-lg-3">

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="col-12 col-lg-4 mb-3 mb-lg-0">
              <Card key={node.fields.slug} className="w-100 h-100">
                <Link to={node.fields.slug} className="">
                  <Img className="card-img w-100 h-100" objectFit fadeIn fluid={node.frontmatter.thumbnail.childImageSharp.fluid} alt={node.frontmatter.title} style={{maxHeight:'200px'}} />
                </Link>
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
                  <Link to={node.fields.slug} className="btn btn-outline-info rounded-pill">Read more</Link>
                </Card.Body>
              </Card>
            </div>
          )
        })}

      </Row>

      <Row className="justify-content-center mb-4 mb-lg-5">
        <Link to='/blog' className="btn btn-lg btn-info rounded-pill">See all blog posts</Link>
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
    cardImg1: file(relativePath: { eq: "three-breads.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImg2: file(relativePath: { eq: "grain-bowl.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImg3: file(relativePath: { eq: "sliced-fruit.jpg"}) {
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