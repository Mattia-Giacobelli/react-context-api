import { NavLink } from "react-router-dom";

export default function Header() {


    return (

        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand " id="always-active" to="/">FAKE STORE</NavLink>
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
                        <NavLink className="nav-link" aria-current="page" to="/Products">Products</NavLink>
                        <NavLink className="nav-link" aria-current="page" to="/AboutUs">AboutUs</NavLink>
                    </div>

                </div>
            </nav>
        </header>
    )
}