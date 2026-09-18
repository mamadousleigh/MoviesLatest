import React, { useState } from "react";

const Header = ({ onsubmit }) => {
  const [searchMovie, setSearchMovie] = useState("");

  const handleSearch = (e) => {
    setSearchMovie(e.target.value);
  };

  const onsubnitMovie = (e) => {
    e.preventDefault();
    console.log(searchMovie);

    onsubmit(searchMovie);
    setSearchMovie("");
  };
  return (
    <div className="flex flex-col items-center fixed w-full top-0 justify-around bg-blue-400 text-2xl text-white capitalize p-2 sm:flex-row sm:justify-around ">
      <h1 className="text-3xl font-bold sm:text-4xl">
        action finest <span className="text-red-400">movies</span>
      </h1>
      <form onSubmit={onsubnitMovie} className="mt-2 flex   justify-center ">
        <input
          onChange={handleSearch}
          value={searchMovie}
          className="border max-w-3xl border-gray-200 rounded mx-2 p-1 w-full outline-0 text-gray-200 sm:w-60"
          type="text"
          placeholder="search movies"
        />
        <button className="bg-gray-500 p-1 capitalize rounded cursor-pointer ">
          search
        </button>
      </form>
    </div>
  );
};

export default Header;
