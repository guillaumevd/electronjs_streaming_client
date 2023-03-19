import { useState, useEffect } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css'

import MovieList from "./pages/movie/movieList";
import MovieSingle from "./pages/movie/movieSingle";
import AuthPage from "./pages/auth/auth";

function App() {
  const [user, setUser] = useState();
  const [movie, setMovie] = useState(null);
  const [manifest, setManifest] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/guillaumevd/streaming_manifest/main/manifest.json`
        );
        setManifest(response.data);
      } catch (err) {
        setManifest(null);
      }
    };
    getData();
  }, []);

  if (manifest) {
    const movies = manifest.movies;
    if (!user) {
      return <AuthPage onAuth={(user) => setUser(user)} />;
    } else {
      if (movie == null) {
        return <MovieList onSetMovie={(movie) => setMovie(movie)} user={user} movies={movies} />;
      } else {
        return <MovieSingle onSetMovie={(movie) => setMovie(movie)} user={user} movie={movie} />;
      }
    }
  }
}

export default App;
