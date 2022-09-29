import React from "react";
import { Container, Card, Button, Form, Col, Row, Alert } from "react-bootstrap";
import LatLon from "./LatLon";

class CityData extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Card>
            <Card.Img variant="top" src={this.props.cityMap} />
            <Card.Body>
              <Card.Title>
                {this.props.cityName}
              </Card.Title>
              <Card.Text>
                {
                  this.props.cityName &&
                  <Container>
                    <LatLon
                      lat={this.props.lat}
                      lon={this.props.lon}
                    />


                  </Container>
                }
                {this.props.error && <Alert variant="danger">{this.props.errorMessage}</Alert>}



              </Card.Text>

            </Card.Body>
          </Card>
        </Container>
      </>

    )
  }
}

export default CityData;