import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Card, Row, Col } from "react-bootstrap"
import '../styles/index.scss'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <section id="aboutCon">
    <Card className="w-100 border-0">
      <Row>
        <Col md={4}>
          <Img fluid={data.avatar.childImageSharp.fluid} alt={author.name} objectFit="cover" objectPosition="50% 50%" fadeIn className="w-100 h-100 rounded" />
        </Col>
        <Col md={8} className="d-flex justify-content-center align-items-center pl-md-2">
          <Card.Body>
            <Card.Title className="font-weight-bold text-pink" style={{fontSize: '1.95em'}}>Hi, I'm Rachel (CNP, Hons).</Card.Title>
            <Card.Text className="h4 text-muted mb-3">I’m a Holistic Nutritionist, Professional Dancer, and Instructor/Choreographer.</Card.Text>
            <Card.Text>My whole life I have been interested in health and wellness. The passion was handed down from my mom who would send me to school with Chlorophyll water (thanks, mom!). While I was completing my Professional Intense Dance Training program I began to experience digestive issues. I would curl up into a little ball with intense abdominal pain! With no clear answer, I tried to eliminate some known allergens. I noticed an immediate improvement in heightened energy levels and stronger body. This allowed me to push my body technically and physically which took my performance to the next level.</Card.Text>
            <Card.Text>From there my passion for nutrition took the centre stage. I decided to attend The Institute of Holistic Nutrition where I would deep dive into all things health-related. I graduated and gained my Certified Nutritional Practitioner Certification (CNP, Hons.)</Card.Text>
            <Link to="/contact" className="btn btn-lg btn-info rounded-pill">Let's chat</Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </section>
  )
}

export default Bio
