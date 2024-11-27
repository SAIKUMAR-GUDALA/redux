
import axios from "axios"
import { useEffect, useState } from "react"
import { HeaderComp } from "./header"
import { ProductsList } from "./productsList"
import { useSelector } from "react-redux"

export const Products = () =>{

let [product ,setProduct] = useState([])


let cartData = useSelector(state => state.cartData)
console.log(cartData);



    useEffect(()=>{
       
        async function handleData() {
            let apiData =  await axios.get('https://dummyjson.com/products')
            console.log(apiData.data.products);
            setProduct(apiData.data.products)
        }
        handleData()
        
    },[])


return(
    <div className="">
         <div className="container">
      <HeaderComp />

      <h1>Counter:{cartData.length}</h1>
         </div >
       

         <div className="container">
         <ProductsList product={product}  />
         </div>
            
    
    </div>
)
}