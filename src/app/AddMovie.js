import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addMovie, removeMovie } from "../features/movieSlice";
import { Stack } from "react-bootstrap";


export default function AddMovie() {
    const dispatch = useDispatch()

    const { name: paramName, director: paramDirector, date: paramDate } = useParams();

    const [name, setName] = useState(paramName || "")
    const [director, setDirector] = useState(paramDirector || "Unknown")
    const [date, setDate] = useState(paramDate || 0)

    const [message, setMessage] = useState("")

    const add = () => {
        dispatch(addMovie({
            name,
            director,
            date,
        }))

        setMessage(`${name} added to favorites!`)
    }

    // const formatDate = (date) => {
    //     let [year, month, day] = date.split('-')
    //     return `${day}-${month}-${year}`
    // }

    return (
        <article className="add-movie-article">
            <label htmlFor="name">Movie Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="director-name">Director Name:</label>
            <input type="text" id="director-name" value={director} onChange={(e) => setDirector(e.target.value)} />

            <label htmlFor="release-date">Date:</label>
            <input type="date" id="release-date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button class='addMovieButton' onClick={add}>Add</button>
            <p><b><i>{message}</i></b></p>
        </article>
    )
}

