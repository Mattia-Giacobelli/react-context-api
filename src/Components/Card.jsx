import { Link } from "react-router-dom"


export default function Card({ product }) {



    return (

        <div className="col-2 mb-3">
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
}