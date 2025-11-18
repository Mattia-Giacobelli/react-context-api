import { NavLink } from "react-router-dom";
import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"

export default function NavBar() {


    //Get context elements
    const { budgetMode, setBudgetMode, getBudgetProducts,
        budgetProducts, setBudgetProducts, products
    } = useContext(BudgetContext)

    //Create toggle budget button
    function toggleBudgetMode() {
        if (budgetMode === true) {
            setBudgetMode(false)
            setBudgetProducts(products)
        } else {
            setBudgetMode(true)
            getBudgetProducts()

        }
    }


    return (

        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand " id="always-active" to="/">FAKE STORE</NavLink>
                <button
                    onClick={toggleBudgetMode}
                    className={`btn btn${budgetMode === true ? '-success' : '-light'}`}>
                    {budgetMode !== false ? "Modalità Budget Attiva " : "Modalità Budget Disattiva"}
                </button>
                <div className="navbar-nav">
                    <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
                    <NavLink className="nav-link" aria-current="page" to="/Products">Products</NavLink>
                    <NavLink className="nav-link" aria-current="page" to="/AboutUs">AboutUs</NavLink>

                </div>

            </div>
        </nav>
    )
}