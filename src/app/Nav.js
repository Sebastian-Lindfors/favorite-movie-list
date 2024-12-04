import { NavLink } from "react-router-dom";

export default function Nav() {

    return (
        <div className="header">
            <h1>Movie List</h1>
            <nav>
                <NavLink className={"nav-link"} to="/">Home</NavLink>
                <NavLink className={"nav-link"} to="/">Home</NavLink>
                <NavLink className={"nav-link"} to="/">Home</NavLink>
            </nav>
        </div>
    );
}