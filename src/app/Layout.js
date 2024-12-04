import { Link, Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <>
            <nav>
                <Link to="/Home"><button>
                    Home
                </button>
                </Link>
            </nav>

            <Outlet />

        </>
    )
}