import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Products } from "./products"
import {Counter} from './counter'
import {Blog} from"./blog"
export const RouterDom = ( )=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products />}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
            </BrowserRouter>
        
        </div>
    )
}