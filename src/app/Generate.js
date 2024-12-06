import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const GenerateMovies = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [movie, setMovie] = useState([]);

    const handleSearch = async () => {

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

            let num = Math.floor(Math.random() * filteredMovies.length)
            setMovie(filteredMovies[num]);
        } else {
            setMovie([]);
        }

    };

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <div>
            {handleSearch}
            <button class='generateButton' onClick={handleSearch}>Generate New</button>
            <div className="movies">
                <NavLink to={`/add-movie/${encodeURIComponent(movie.title)}/Unknown/${movie.release_date}`}>
                    <div className="movie">

                        <img
                            className="movie-image"
                            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                            alt={movie.title}

                        />

                        <h3>{movie.title}</h3>

                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default GenerateMovies;