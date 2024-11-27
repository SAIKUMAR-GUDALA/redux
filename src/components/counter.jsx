

import { useDispatch, useSelector } from "react-redux"
import { HeaderComp } from "./header"
import { decrement, increment } from "../store/counterOPr"



export const Counter = ( )=>{

let counter = useSelector(state => state.counter)
let disptach =  useDispatch()


    return(
        <div>
            <HeaderComp/>
            <h1> Counter :{counter}</h1>

            <button className="btn btn-primary me-5" onClick={()=> disptach(increment())} >INC</button>
            <button className="btn btn-primary"      onClick={()=> disptach(decrement())}  >dec</button>


        </div>
    )
}