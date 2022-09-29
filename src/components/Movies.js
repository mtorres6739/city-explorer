import React from "react";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map((movie) => {
          return (
            <Container>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={movie.image_url} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                  <Card.Text>Average Votes: {movie.average_votes}</Card.Text>
                  <Card.Text>Total Votes: {movie.total_votes}</Card.Text>
                  <Card.Text>Popularity: {movie.popularity}</Card.Text>
                  <Card.Text>Released On: {movie.released_on}</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          );
        })}
      </>
    );
  }
}

export default Movies;
