import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";


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
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log('[retrieving movies]', data.Search)
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Lord of the Rings"
          type="text"
          name=""
          id=""
          onChange={() => { }}
        />


      </div>





      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movies) => (
            <MovieCard movieOne={movies} />
          ))}
        </div>
      ) : (
        <div className="empty">No movies found</div>
      )


      }


    </div>
  );
}

export default App;