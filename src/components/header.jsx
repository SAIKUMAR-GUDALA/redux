
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HeaderComp = ({count}) =>{
    console.log("Hello");
    let counter = useSelector(state => state.counter)

    return(
        <div className="container">
            <div className="row bg-secondary">
                <h1>Header</h1>
                <div className="col-12">
               <Link className="text-light ms-5" to="/">Home</Link>
               <Link className="text-light ms-5"to="/products">Products</Link>
               <Link className="text-light ms-5"to="/counter">Counter{counter}</Link>
               <Link className="text-light ms-5"to="/blog">Blog</Link>
        
            </div>
            </div>
        </div>
    )
}