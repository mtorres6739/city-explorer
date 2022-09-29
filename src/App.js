import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Card, Button, Form, Col, Row, Alert } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import Weather from "./components/Weather";
import CityData from "./components/CityData";
import Movies from "./components/Movies";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      lat: "",
      lon: "",
      error: false,
      weatherBit: [],
      weather: [],
      cityMap: "",
      errorMessage: "",
      movies: []

    };
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
    console.log(this.state.searchQuery);
  };

  handleSearch = async (event) => {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const res = await axios.get(API);

      const weatherBit = await axios.get(`http://localhost:3001/weatherbit?searchQuery=${this.state.searchQuery}&lat=${res.data[0].lat}&lon=${res.data[0].lon}`);

      const movies = await axios.get(`http://localhost:3001/movies?searchQuery=${this.state.searchQuery}`);

      this.setState({
        location: res.data[0],
        lat: res.data[0].lat,
        lon: res.data[0].lon,
        error: false,
        weatherBit: weatherBit.data,
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${res.data[0].lat},${res.data[0].lon}&zoom=12`,
        movies: movies.data


      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  };




  render() {
    console.log(this.state);
    return (

      <>
        <Container>
          <SearchForm
            handleInput={this.handleInput}
            handleSearch={this.handleSearch}
          />

          <CityData
            cityMap={this.state.cityMap}
            cityName={this.state.location.display_name}
            lat={this.state.location.lat}
            lon={this.state.location.lon}
            error={this.state.error}
            errorMessage={this.state.errorMessage}
          />

          <Weather
            weatherBit={this.state.weatherBit}
          />

          <Movies
            movies={this.state.movies}
          />
        </Container>

      </>


    );
  }
}

export default App;