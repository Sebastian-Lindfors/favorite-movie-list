import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/all/day?api_key=5ccffe328dbc79c2bc6ea0a9e9d6fe07`
            );
            const data = await response.json();
            console.log(data);
            const filteredMovies = data.results.filter(
                (movie) => movie.title && movie.poster_path && movie.release_date
            );
            setMovies(filteredMovies);
        };

        fetchTrending();
    }, []);

    return (
        <div>
            <h1 className="center">Trending Movies</h1>
            <div className="movies">
                {movies.length === 0 ? (
                    <p>No trending movies available</p>
                ) : (
                    movies.map((movie, index) => (
                        <NavLink to={`/add-movie/${encodeURIComponent(movie.title)}/Unknown/${movie.release_date}`}>
                            <div key={index} className="movie">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                    className="movie-image"
                                />
                                <h3>{movie.title}</h3>
                            </div>
                        </NavLink>
                    ))
                )}
            </div>
        </div>
    );
};

export default TrendingMovies;