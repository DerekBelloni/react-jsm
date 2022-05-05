import React from "react";

const MovieCard = ({ movieOne }) => {
  return (
    <div className="movie">
      <div>
        <p>2007</p>
      </div>
      <div>
        <img src={movieOne.Poster !== 'N/A' ? movieOne.Poster : 'https://via.placeholder.com/400'} alt={movieOne.Title} />
      </div>
      <div>
        <span>{movieOne.Type}</span>
        <h3>{movieOne.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard;