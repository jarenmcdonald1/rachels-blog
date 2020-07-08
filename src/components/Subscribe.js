import React from "react"
//import { Link } from "gatsby"
import { Container, Row, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Subscribe = () => (
  <section className="bg-light mt-4 mt-lg-5">
    <Container className="py-4 py-lg-5">
        <Row className="d-block mb-4 px-3 px-md-2">
            <h2>Subscribe to my newsletter!</h2>
            <h5 className="lead">Be the first to hear about new blog posts, fun ideas and so much more!</h5>
        </Row>
        <Row className="px-3 px-md-0 justify-content-center align-items-center">
            <Form className="w-100 d-md-flex justify-content-around align-items-center">
                <Form.Group id="subNameGroup" className="w-100 px-md-2 mb-md-0">
                    <Form.Label className="sr-only">Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group id="subNameGroup" className="w-100 px-md-2 mb-md-0">
                    <Form.Label className="sr-only">Email</Form.Label>
                    <Form.Control type="email" placeholder="Your email" />
                </Form.Group>
                <Button variant="info" type="submit" className="px-md-2 rounded-pill">
                    Subscribe
                </Button>
            </Form>
        </Row>
    </Container>
  </section>
)

export default Subscribe
