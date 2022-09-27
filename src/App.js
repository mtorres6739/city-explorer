import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Card, Button, Form, Col, Row, Alert } from "react-bootstrap";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      error: false,
      errorMessage: "",
      searchResults: [],
      cityMap: ""
    };
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value});
    console.log(this.state.searchQuery);
  };

  handleSearch = async (event) => {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const res = await axios.get(API);
      console.log(res.data[0]);
      this.setState({ 
        location: res.data[0],
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${res.data[0].lat},${res.data[0].lon}&zoom=12`
});
      

  
    } catch (error) {
      this.setState({ error: true, errorMessage: error.message })
    }
  }

  render() {
    return (
   
     <div className="App">
        <Container>
        <h1>City Explorer</h1>
        <Form>
          <Row>
            <Col xs={6}>
          <Form.Group className="mb-3" controlId="search">
              <Form.Control type="text" onChange={this.handleInput}  placeholder="search for a city" />
          </Form.Group>
          </Col>
          
          <Col xs={6}>
            <Button variant="primary" onClick={this.handleSearch}>
            Explore!
          </Button>
          </Col>
          </Row>
        </Form>

          <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={this.state.cityMap} />
            <Card.Body>
              <Card.Title>
                {this.state.location.display_name}
              </Card.Title>
              <Card.Text>
              {
                this.state.location.display_name &&
                <>
                  
                  Latitude: {this.state.location.lat}
                  <br />
                  Longitude: {this.state.location.lon}
                 
                </>
              }
              {this.state.error && <Alert variant="danger">{this.state.errorMessage}</Alert>}
              
              </Card.Text>
             
            </Card.Body>
          </Card>

       </Container>
      </div>
   
    );
  }
}

export default App;