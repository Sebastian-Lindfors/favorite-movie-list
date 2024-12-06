import React from "react";
import { useSelector } from "react-redux";
import rotten from "./rotten.png";
import { replace } from "react-router-dom";

export default function Movies() {

    const movies = useSelector((state) => state.movie)

    const gotoRottenTomatoes = (name) => {

        let urlSubstring = name.replaceAll(" ", "_")
        urlSubstring = urlSubstring.replaceAll(/[^a-zA-Z_0-9]/g, "")
        urlSubstring = urlSubstring.toLowerCase()
        let url = `https://www.rottentomatoes.com/m/${urlSubstring}`

        const newWindow = window.open(url, `_blank`, `noopener,noreferrer`)
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="favorite-movie-list">
            <h1>Movie List</h1>
            {movies.length > 0 ? (
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            <div className="favorite-movie-list__info">
                                <strong>Name:</strong> {movie.name}  <br />
                                <strong>Director:</strong> {movie.director} <br />
                                <strong>Date:</strong> {movie.date} <br />
                            </div>
                            <img src={rotten} alt="" onClick={() => gotoRottenTomatoes(movie.name)} />

                        </li>

                    ))}
                </ul>
            ) : (
                <p>Movie list is empty.</p>
            )}
        </div>
    );
}