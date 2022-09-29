import React from "react";
import { Container, Card, Button, Form, Col, Row, Alert } from "react-bootstrap";

class LatLon extends React.Component {
  render() {
    return (
      <>
        <Container>
          <p>Latitude: {this.props.lat}</p>
          <p>Longitude: {this.props.lon}</p>
        </Container>
      </>
    )
  }
}

export default LatLon;