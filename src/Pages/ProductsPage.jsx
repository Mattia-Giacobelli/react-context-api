import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"


export default function ProductsPage() {

    //Create variable to store products data
    const [products, setProducts] = useState([])


    //Create Axios call
    const productsApi = 'https://fakestoreapi.com/products'

    function getProducts() {

        axios.get(productsApi)
            .then(res => setProducts(res.data)
            )
    }

    useState(getProducts, [])

    //Get context elements
    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    //Create toggle budget button
    function toggleBudgetMode() {
        if (budgetMode === true) {
            setBudgetMode(false)
        } else {
            setBudgetMode(true)
        }
    }

    return (
        <>
            <div className="container pt-4">

                <button
                    onClick={toggleBudgetMode}
                    className={`btn btn${budgetMode === true ? '-success' : '-light'}`}>
                    Budget Mode
                </button>

                <div className="row mt-4">
                    {products.map(product => {

                        return (
                            <div key={product.id} className="col-2 mb-3">
                                <Link to={`/Products/${product.id}`}>
                                    <div className="card h-100">
                                        <div className="img-cont p-3">
                                            <img src={product.image} className="card-img-top w-100" alt={product.image} />
                                        </div>

                                        <div className="card-body">
                                            <h6 className="card-title">{product.title}</h6>
                                            <p className="card-text">{product.price}€</p>


                                        </div>

                                        <div className="rating">
                                            <span className="card-text pe-1">
                                                {product.rating.rate}/5
                                            </span>
                                            <span className="text-warning">
                                                <i className="bi bi-star-fill"></i>
                                            </span>
                                            <span className="ps-2">
                                                {product.rating.count}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}