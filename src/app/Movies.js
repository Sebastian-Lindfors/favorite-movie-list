import React from "react";
import { useSelector } from "react-redux";
import rotten from "./rotten.png";

export default function Movies() {

    const movies = useSelector((state) => state.movie)

    return (
        <div className="favorite-movie-list">
            <h1>Movie List</h1>
            {movies.length > 0 ? (
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            <div>
                                <strong>Name:</strong> {movie.name}  <br />
                                <strong>Director:</strong> {movie.director} <br />
                                <strong>Date:</strong> {movie.date} <br />
                            </div>
                            <img src={rotten} alt="" />

                        </li>

                    ))}
                </ul>
            ) : (
                <p>Movie list is empty.</p>
            )}
        </div>
    );
}