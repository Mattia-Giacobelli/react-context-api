import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Helix } from 'ldrs/react'
import 'ldrs/react/Helix.css'
import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"



export default function ProductPage() {

    const { setShowFilter, showFilter } = useContext(BudgetContext)

    useEffect(() => { setShowFilter(false) }, [])

    const { id } = useParams()

    const [product, setProduct] = useState([])

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    //Create Axios call
    const productsApi = `https://fakestoreapi.com/products/${id}`

    function getProduct() {

        axios.get(productsApi)
            .then(res => {
                setProduct(res.data)
                console.log(res.data);
                if (res.data === '') {
                    navigate(-1)
                }

            }
            )
            .finally(() => setLoading(false))
    }

    useEffect(getProduct, [id])

    function handlePrev() {
        navigate(`/products/${product.id - 1}`)
        setLoading(true)


    }
    function handleNext() {
        navigate(`/products/${product.id + 1}`)
        setLoading(true)

    }

    return (
        <>
            {loading ? <div className="container d-flex justify-content-around p-5">
                <Helix
                    size="150"
                    speed="2.5"
                    color="black"
                />
            </div> :

                <div className="container">
                    <div className="product d-flex flex-column justify-content-center py-5 align-items-center">
                        <div className="img-cont px-5">
                            <img src={product.image} className="card-img-top" alt={product.image} />
                        </div>

                        <div className="card-body">
                            <h6 className="card-title">{product.title}</h6>
                            <p className="card-text">{product.price}€</p>
                            <p className="card-text">{product.description}</p>


                        </div>

                        <div className="rating">
                            <span className="card-text pe-1">
                                {product.rating?.rate}/5
                            </span>
                            <span className="text-warning">
                                <i className="bi bi-star-fill"></i>
                            </span>
                            <span className="ps-2">
                                {product.rating?.count}
                            </span>
                        </div>
                        <div className="container buttons">
                            <button disabled={product.id === 1}
                                className="btn btn-dark"
                                onClick={handlePrev}>
                                Prev
                            </button>
                            <button className="btn btn-dark"
                                onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}