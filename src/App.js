import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MovieCard from './MovieCard';

//  API KEY: eea5807b

const API_URL = 'http://www.omdbapi.com?apikey=eea5807b'
const movieOne = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}
const App = () => {
  const [movies, setMovies] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          type="text"
          name=""
          id=""
          onChange={() => { }}
        />
        /* Search Icon Here */

      </div>
      <div className="container">
        <MovieCard movieOne={movieOne} />
      </div>
    </div>
  );
}

export default App;