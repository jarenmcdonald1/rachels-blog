import React from "react"
import { graphql } from "gatsby"
import { navigate } from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Card, Form, Button } from "react-bootstrap"
import '../styles/index.scss'
import contactInfo from '../../site/settings/contact_info.json'
import { FaPaperPlane, FaInstagram, FaEnvelope } from 'react-icons/fa'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <Row>
        <Card className="bg-light w-100 px-3 px-md-4 px-lg-5 py-4">
        <Row className="align-items-center justify-content-center">
        <Col xs={12} lg={6}>
        <Card.Body className="mb-3">
          <Card.Title className="text-pink card-header-text">Let's Chat</Card.Title>
          <Card.Text>Ask away! Over tea, kale chips, or smoothie bowls...your choice. If you're looking for a way to live a healthier lifestyle, start with an email and we'll set up a chat. You're one decision away from taking the next step.</Card.Text>
          <Card.Text><FaEnvelope size="2x" style={{maxWidth:'30px'}} className="mr-2 mb-1" aria-hidden="true" title="email icon" /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></Card.Text>
          <Card.Text><FaInstagram size="2x" style={{maxWidth:'30px'}} className="mr-2 mb-1" aria-hidden="true" title="instagram logo" /> <a href={`${contactInfo.instagram}`}>Follow me on Instagram</a></Card.Text>
        </Card.Body>
        </Col>
        <Col xs={12} lg={6}>
          <Form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <Form.Group hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" name="name" onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your message</Form.Label>
              <textarea className="form-control" name="message" onChange={handleChange} />
            </Form.Group>
            <div className="w-100 d-flex align-items-center justify-content-center">
              <Button variant="info" type="submit" size="lg" className="px-md-3 px-lg-4 rounded-pill">Submit Message <FaPaperPlane className="ml-2 mb-1" aria-hidden="true" title="paper plane arrow" /></Button>
            </div>
          </Form>
          </Col>
          </Row>
        </Card>
      </Row>
    </Layout>
  )
}

/*
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
*/

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`