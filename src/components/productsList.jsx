import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../store/ProductsOPer"

export const ProductsList = ({ product}) => {

    let dispatch = useDispatch()

    function uCount(product) {
       dispatch(addItem(product))
    }

    function rCount(product) {
       dispatch(removeItem(product))
    }

    return (
        <div className="contianer">
            <div className="row">
               {
                product.map(product =>(
                    <div className="card col-3 m-2"  key={product.id}>
                                <img className="card-img-top w-30 h-30" src={product.thumbnail} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <button className="btn btn-primary me-3" onClick={()=>uCount(product)}  >add</button>
                                    <button className="btn btn-danger"       onClick={()=>rCount(product)}  >remove</button>
                                </div>
                            </div>
                ))
               }
    
            </div>
        </div>
    )
}

