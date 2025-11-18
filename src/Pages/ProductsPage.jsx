import axios from "axios"
import { useEffect, useState } from "react"
import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"
import Card from "../Components/Card"


export default function ProductsPage() {

    const { budgetProducts, setShowFilter, showFilter } = useContext(BudgetContext)

    //Create Axios call
    // const productsApi = 'https://fakestoreapi.com/products'

    // function getProducts() {

    //     axios.get(productsApi)
    //         .then(res => setProducts(res.data)
    //         )
    // }

    // useEffect(getProducts, [])

    useEffect(() => { setShowFilter(true) }, [])


    return (
        <>
            <div className="container pt-4">


                <div className="row mt-4">
                    {budgetProducts.map(product => {

                        return (
                            <Card key={product.id} product={product} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}