import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

const Header = () => {
    const data = [
        {
            icon: "🔥",
            name: "Trending",
            link: "/",
        },
        {
            icon: "🎥",
            name: "Movies",
            link: "/movies",
        },
        {
            icon: "📺",
            name: "Add Movie",
            link: "/add-movie",
        },
        {
            icon: "🔍",
            name: "Search",
            link: "/search",
        },
        {
            icon: "🎲",
            name: "Generate",
            link: "/generate",
        },
    ];

    return (
        <div className="header-container">
            <div className="header">
                {data.map((Val, index) => {
                    return (
                        <NavLink key={index} to={Val.link} className="header-item">
                            <button className="header-btn">
                                <span className="header-icon">{Val.icon}</span>
                                <br />
                                <h5 className="header-text">{Val.name}</h5>
                            </button>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;