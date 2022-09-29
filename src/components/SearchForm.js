import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Card, Button, Form, Col, Row, Alert } from "react-bootstrap";

class SearchForm extends React.Component {

  render() {
    return (
      <>
        <Container>
          <h1>City Explorer</h1>
          <Form>
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="search">
                  <Form.Control type="text" onChange={this.props.handleInput} placeholder="search for a city" />
                </Form.Group>
              </Col>

              <Col xs={6}>
                <Button variant="primary" onClick={this.props.handleSearch}>
                  Explore!
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    )
  }


}

export default SearchForm;