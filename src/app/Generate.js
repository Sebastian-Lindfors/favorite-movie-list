import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const GenerateMovies = () => {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    function createRandomString(length) {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;

    }

    /*  useEffect(() => {
         const fetchGenerate = async () => {
 
         };
 
         fetchGenerate();
     }, []); */

    return (
        <div>
            asdasdaeda
        </div>
    );
};

export default GenerateMovies;