import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";


const SearchMovies = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query) {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=5ccffe328dbc79c2bc6ea0a9e9d6fe07&query=${query}`
            );
            const data = await response.json();
            const filteredMovies = data.results.filter(
                (movie) => movie.title && movie.poster_path && movie.release_date
            );
            setMovies(filteredMovies);
        } else {
            setMovies([]);
        }


    };

    return (
        <div>
            <input
                className="search-bar"
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={handleSearch}
            />
            <div className="movies">
                {movies.map((movie) => (
                    <div className="movie" key={movie.id}>
                        <NavLink to={`/add-movie/${encodeURIComponent(movie.title)}/Unknown/${movie.release_date}`}>
                            <img
                                className="movie-image"
                                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                alt={movie.title}

                            />
                        </NavLink>
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchMovies;