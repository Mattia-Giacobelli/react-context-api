import { NavLink } from "react-router-dom"


export default function Footer() {


    return (
        <footer className="text-light bg-dark">

            <div className="container">
                <div className="row py-4">
                    <div className="col-4">
                        <ul className="list-unstyled">
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Scam Rubberduck</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>

                        </ul>

                    </div>
                    <div className="col-4">
                        <ul className="list-unstyled">
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Privacy</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>


                        </ul>

                    </div>
                    <div className="col-4">
                        <ul className="list-unstyled">
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Contacts</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/AboutUs">Lorem, ipsum.</NavLink>

                        </ul>

                    </div>
                </div>



            </div>




            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand " id="always-active" to="/">FAKE STORE</NavLink>
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
                        <NavLink className="nav-link" aria-current="page" to="/Products">Products</NavLink>
                        <NavLink className="nav-link" aria-current="page" to="/AboutUs">AboutUs</NavLink>
                    </div>

                </div>
            </nav>
        </footer>
    )
}