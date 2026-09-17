import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

const App = () => {
  const [movies, setMovies] = useState(() => {
    const savedMovie = localStorage.getItem("movies");

    return savedMovie ? JSON.parse(savedMovie) : [];
  });
  const [selectMovie, setSelectMovie] = useState(null);
  const APIKey = "e4325d34f8f5fd3884a8e668cf46ebb3";

  const FetchMovie = async (value) => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${value}`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    const GetMovieDefault = async (value) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=leigh`,
        );
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    if (movies.length === 0) {
      GetMovieDefault();
    }
  });
  const GetviewMovieCard = (movies) => {
    setSelectMovie(movies);
  };
  return (
    <div className="flex flex-col  bg-gray-100 min-h-screen w-full ">
      <Header onsubmit={FetchMovie} />
      <Movies
        movies={movies}
        onviewMovieCad={GetviewMovieCard}
        selectMovie={selectMovie}
        // setSelectMovie={setSelectMovie}
      />
    </div>
  );
};

export default App;
