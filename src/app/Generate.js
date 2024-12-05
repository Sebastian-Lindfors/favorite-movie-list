import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const GenerateMovies = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearch = async (e) => {

        const query = String.fromCharCode(97 + Math.floor(Math.random() * 26));

        setSearchQuery(query);

        console.log(query);

        if (query) {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=5ccffe328dbc79c2bc6ea0a9e9d6fe07&query=${query}`
            );
            const data = await response.json();
            const filteredMovies = data.results.filter(
                (movie) => movie.title && movie.poster_path && movie.release_date
            );

            let num = Math.floor(Math.random() * 20)
            setMovies(filteredMovies[num]);
        } else {
            setMovies([]);
        }

    };

    return (
        <div>

            <button class='generateButton' onClick={handleSearch}>Generate</button>

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

export default GenerateMovies;