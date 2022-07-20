import React from "react"

export default function FuncC1(props){
    return(
        <div>
            <button onClick={()=>props.func({name : "hrhehehe"})}>funcchild</button>
        </div>

    )
}