import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"

export default function HomePage() {

    const { setShowFilter, showFilter } = useContext(BudgetContext)

    useEffect(() => { setShowFilter(false) }, [])

    return (

        <>
            <div className="p-5 mb-4 bg-light rounded-3 vh-100">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">WELCOME TO FAKESTORE</h1>
                    <p className="col-md-8 fs-4">
                        We are a new e-commerce website full of random products that you can buy with a
                        <strong> TWIST</strong>:
                        <br />
                        you'll recive a rubberduck to discuss about how you got scammed on our website
                    </p>
                    <NavLink className="btn btn-primary btn-lg" type="button" to="/products" >
                        Products
                    </NavLink>
                </div>
            </div>

        </>

    )
}