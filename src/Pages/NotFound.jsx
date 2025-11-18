import { useEffect } from "react"
import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"

export default function NotFound() {

    const { setShowFilter, showFilter } = useContext(BudgetContext)

    useEffect(() => { setShowFilter(false) }, [])

    return (
        <div className="container-fluid bg-light min-vh-100">
            <h1 className="text-center p-5">
                ERROR 404: <br />
                PAGE NOT FOUND
            </h1>
        </div>
    )
}