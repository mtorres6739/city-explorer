import React from "react";
import { Card, Button, Form, Col, Row, Alert, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherBit.map((item, index) => {
          return (
            <Container>


              <Card key={index} style={{ width: '40rem' }}>
                <Card.Body>
                  <Card.Title>
                    {item.date}
                  </Card.Title>
                  <Card.Text>
                    <div>
                      {item.description}
                    </div>
                    <div>
                      High: {item.highTemp}
                    </div>
                    <div>
                      Low: {item.lowTemp}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>


            </Container>
          );
        })}
      </>
    );
  }
}

export default Weather;
