import React from "react";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.movie.image_url} />
            <Card.Body>
              <Card.Title>{this.props.movie.title}</Card.Title>
              <Card.Text>{this.props.movie.overview}</Card.Text>
              <Card.Text>Average Votes: {this.props.movie.average_votes}</Card.Text>
              <Card.Text>Total Votes: {this.props.movie.total_votes}</Card.Text>
              <Card.Text>Popularity: {this.props.movie.popularity}</Card.Text>
              <Card.Text>Released On: {this.props.movie.released_on}</Card.Text>
            </Card.Body>
          </Card>
        </Container>



      </>
    );
  }
}

export default Movie;

