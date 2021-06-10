import "./styles.css";
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Movie from "./Components/Movie.jsx";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
export default function App() {
  const [movies, setMovies] = useState([]);
  const link = process.env.REACT_APP_API_URL;
  useEffect(() => {
    getMovies(link);
  }, []);
  const getMovies = (api) => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results);
      });
  };
  return (
    <div className="App container px-0">
      <Header getMovies={getMovies} link={link} />
      <Row className="my-4">
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <Col lg="3" md="6" sm="12" key={movie.id} className="my-3">
                <Movie {...movie} />
              </Col>
            );
          })}
      </Row>
      <Footer />
    </div>
  );
}
