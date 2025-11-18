import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import BudgetContext from "../contexts/BudgetContext"

export default function NavBar() {

    //Get context elements
    const { budgetMode, setBudgetMode, getBudgetProducts,
        budgetProducts, setBudgetProducts, products, priceFilter,
        setPriceFilter, showFilter
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
    useEffect(getBudgetProducts, [priceFilter])
    console.log(priceFilter);



    return (

        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <div className="container-fluid align-items-center">
                <NavLink className="navbar-brand " id="always-active" to="/">FAKE STORE</NavLink>
                {/* <button
                    onClick={toggleBudgetMode}
                    className={`btn btn${budgetMode === true ? '-success' : '-light'}`}>
                    {budgetMode !== false ? "Modalità Budget Attiva " : "Modalità Budget Disattiva"}
                </button> */}
                {showFilter && <div>
                    <input
                        onChange={e => setPriceFilter(e.target.value)}
                        value={priceFilter ? priceFilter : ''}
                        type="number"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Max-price"
                    />

                </div>}

                <div className="navbar-nav">
                    <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
                    <NavLink className="nav-link" aria-current="page" to="/products">Products</NavLink>
                    <NavLink className="nav-link" aria-current="page" to="/aboutUs">AboutUs</NavLink>

                </div>

            </div>
        </nav>
    )
}