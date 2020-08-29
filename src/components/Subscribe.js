import React from "react"
//import { Link } from "gatsby"
import { navigate } from 'gatsby-link'

import { Container, Row, Form, Button } from 'react-bootstrap';
import '../styles/index.scss'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  export default function Subscribe({ data }) {
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

      onSubmitSuccess()
    }

    function onSubmitSuccess() {
        document.getElementById('subInputText').classList.add('d-none');
        document.getElementById('subInputText').classList.remove('d-block');

        document.getElementById('subInputForm').classList.add('d-none');
        document.getElementById('subInputForm').classList.remove('d-flex');

        document.getElementById('subSucessMsg').classList.add('d-block');
        document.getElementById('subSucessMsg').classList.remove('d-none');
    }
  
    return (
        <section className="mt-3 mt-lg-4 bg-light">
            <Container className="py-4 py-lg-5">
                <Row className="d-block mb-4 px-3 px-md-2" id="subInputText">
                    <h2>Subscribe to my newsletter!</h2>
                    <p className="lead">Be the first to hear about new blog posts, fun ideas and so much more!</p>
                </Row>
                <Row className="px-3 px-md-0 justify-content-center align-items-center" id="subInputForm">
                <Form
                    name="subscribers"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="w-100 d-md-flex align-items-center justify-content-center"
                >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <Form.Group hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                        </label>
                    </Form.Group>
                    <Form.Group className="w-100 px-md-2 mb-md-0">
                        <Form.Label for="subscribeName" className="sr-only">Your name</Form.Label>
                        <Form.Control id="subscribeName" type="text" name="name" placeholder="Your name" onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="w-100 px-md-2 mb-md-0">
                        <Form.Label for="subscribeEmail" className="sr-only">Your email</Form.Label>
                        <Form.Control id="subscribeEmail" type="email" name="email" placeholder="Your email" onChange={handleChange} required />
                    </Form.Group>
                    <Button variant="info" type="submit" className="px-md-4 rounded-pill">Subscribe</Button>
                </Form>
                </Row>
                <Row className="d-none" id="subSucessMsg">
                    <h4 className="text-pink py-4">Thank you, your request has been recieved! Check your inbox soon for updates and more information.</h4>
                </Row>
            </Container>
        </section>
    )
}
