import React from "react"
import ClassC1 from "./ClassC1"
import FuncC1 from "./FuncC1"
export default class ClassC extends React.Component{
    constructor(){
        console.log("COnstructor");
        super()
        this.state = {
            name: "someName",
            age : 45
    }
    }

    someFunc(data){
        console.log(data);
    }

    changeAge(){
           this.setState({age : 39}) 
    }

    changeName=()=>{
        this.setState({name : "Vijay"})
    }

    changeAge2(data){
        this.setState({age: data})
    }


    componentDidMount(){
        console.log("did mount");
    }

    componentDidUpdate(preprobs,prestate){
        console.log("did update",preprobs,prestate );
    }

    render(){
        console.log("render")

        
        return(
            
            <div>
                
                <h2>..........Class component.............</h2>
                
                {/* <ClassC1  func = {this.someFunc}  func1 = {this.changeAge2.bind(this)}/> */}
                <h2>{this.state.name}</h2>
                <h2>{this.state.age}</h2>
                <button onClick= {this.changeAge.bind(this)}>change age</button>
                <button onClick={this.changeName}>change name</button>
                <h2>..........Class component.............</h2>
            </div>
        )
    }
}