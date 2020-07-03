import React from "react"
//import { Link } from "gatsby"
import { Container, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Subscribe = () => (
  <section className="bg-light">
    <Container>
        <Row className="py-4 py-lg-5">
            <Form>
                <Form.Group id="subNameGroup">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Joanna Wellick" />
                </Form.Group>
            </Form>
        </Row>
    </Container>
  </section>
)

export default Subscribe
