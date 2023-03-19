import { useState } from "react";
import './style.css'

const movieList = (props) => {
  const movies = props.movies;
  const user = props.user;
  const handlePlayClick = (movie) => {
    props.onSetMovie(movie);
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }} className="row movie_list">
      <h1>Bonjour, {user.username}</h1>
      <h2>Voici les films à la une:</h2>
      {movies.map((movie) => (
        <div onClick={() => handlePlayClick(movie)} key={movie.id} className="card movie_card">
          <img src={movie.img_url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">{movie.title}</h3>
            <h6 className="card-description">{movie.description}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default movieList;
