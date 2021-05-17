import React, { Component } from "react"

class Color extends Component {
    constructor(props){
        super(props)
        this.state = {
            color:["yellow", "blue", "red", "black"],
            currentColor:""
        }
    }
    render(){
        const handleChange = () => {
            console.log("Hello I was clicked");
            // let randomIndex = Math.ceil(Math.random()*4)
            // this.setState({currentColor:this.state.color[randomIndex]})
            return 
        }

        return <div>
            <div style={{width: "200px", height: "200px", backgroundColor:this.color, cursor: "pointer"}}onClick={()=>handleChange()}></div>
        </div>
        }
}
export default Color;