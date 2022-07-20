import React from "react"
export default function FuncC(props){
    const [phone,changePhone] = React.useState("Rokia")
    function func(data){
        console.log(data);
    }
    return(
        <div>
            <h2>..........Functional component.............</h2>
            <h2>{phone}</h2>
            <button onClick={()=>changePhone("Lava")}>change phone</button>
           
            <h2>..........Functional component.............</h2>
        </div>
    )
}