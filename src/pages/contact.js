import React from "react"
import { graphql } from "gatsby"
import { navigate } from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Card, Form, Button } from "react-bootstrap"
import '../styles/index.scss'
import contactInfo from '../../site/settings/contact_info.json'

//{contactInfo.email}

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
        <Card.Body className="border-bottom mb-3">
          <Card.Title className="text-pink" style={{fontSize: '1.95em'}}>Let's Chat</Card.Title>
          <Card.Text>Ask away! Over tea, kale chips, or smoothie bowls...your choice. If you're looking for a way to live a healthier lifestyle, start with an email and we'll set up a chat. You're one decision away from taking the next step.</Card.Text>
          <Card.Text><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></Card.Text>
        </Card.Body>
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
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <div className="w-100 d-flex align-items-center justify-content-center">
              <Button variant="info" type="submit" size="lg">Submit Message</Button>
            </div>
          </Form>
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