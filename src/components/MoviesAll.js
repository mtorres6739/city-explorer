import React from "react";
import { Container } from "react-bootstrap";
import Movie from "./Movie";

class MoviesAll extends React.Component {
  render() {
    return (
      <>
      <Container>
        <div>
          {this.props.movies.map( item => <Movie key={item.id} movie={item} />)}
        </div>
      </Container>
      </>
    )
  }
}

export default MoviesAll;
