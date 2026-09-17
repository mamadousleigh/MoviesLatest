import React from "react";

const Movies = ({ movies, onviewMovieCad, selectMovie }) => {
  return (
    <div className="p-6">
      {selectMovie ? (
        <div className="flex justify-center mx-4">
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${selectMovie.poster_path}`}
              alt={selectMovie.original_title}
              className="w-full h-96 object-cover"
            />

            <div className="p-6">
              <h1 className="text-3xl font-bold">
                {selectMovie.original_title}
              </h1>

              <p className="font-semibold mt-2">
                Release Date: {selectMovie.release_date}
              </p>

              <p className="mt-4 text-gray-700">{selectMovie.overview}</p>

              <button
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => onviewMovieCad(null)}
              >
                Back to Movies
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="object-cover w-full h-72"
              />

              <div className="my-2 p-2">
                <h2 className="text-2xl font-bold">{movie.original_title}</h2>

                <p className="font-semibold">{movie.release_date}</p>
              </div>

              <div className="flex justify-around flex-col gap-4 sm:flex-row p-4">
                <a
                  className="bg-green-400 p-2 rounded text-white text-center"
                  href={`https://www.themoviedb.org/movie/${movie.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Movie
                </a>

                <button
                  onClick={() => onviewMovieCad(movie)}
                  className="bg-blue-400 p-2 rounded text-white"
                >
                  View Movie
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
