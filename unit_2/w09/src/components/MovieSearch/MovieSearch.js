import React, { useState, useEffect } from "react";
import { API_KEY } from "./config";
import "./MovieSearch.css";

const MovieSearch = () => {
  // Task 1: Declare state variables
  // Code goes here
  const [movies, setMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`;

  // Task 3: Set up the useEffect hook
  // Code goes here
  useEffect(() => {
    console.info("searchTerm >>> ", searchTerm);
    fetchMovies();
  }, [searchTerm]);

  // Task 4: Define the fetchMovies function. Request data using this!
  // fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
  const fetchMovies = async (searchTerm) => {
    // Code goes here
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.Search);
    console.info("movies >>> ", movies);
  };

  // Task 5: Create a function to handle input changes
  const handleChange = async (event) => {
    // Code goes here
    console.log("event in handleChange >>> ", event.target.value);
    setSearchTerm(event.target.value);
    await fetchMovies(searchTerm);
  };

  // const handleClick = (event) => {
  //   setHasSearched(!hasSearched);
  //   console.info("event in handle click >>> ", event.target.innerHTML)
  //   if(event.target.innerHTML === "Search") {
  //     console.info("sibling value >>> ", event.target.previousElementSibling.value)
  //     setSearchTerm(event.target.previousElementSibling.value);
  //     fetchMovies(searchTerm);
  //   }
  // };

  // Task 6: Render the component. The input should have placeholder="Search for a movie" eg
  //   <input
  //   type="text"
  //   placeholder="Search for a movie"
  //   .
  //   .
  //   .
  // />
  return (
    <>
      {/* {!hasSearched ? ( */}
        <div className="query-form">
          <input
            type="text"
            placeholder="Search for a movie title..."
            onChange={handleChange}
          />
          </div>
          {/* <button type="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      ) : (
        <div>
          <button type="submit" onClick={handleClick}>
            Search Again
          </button>
        </div>
      )} */}
      {movies ? (
        <div className="results">
          {movies.map((m) => (
            <div className="movie-cards">
              <img src={m.Poster} alt={m.Title} />
              <p>{m.Title}</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default MovieSearch;
