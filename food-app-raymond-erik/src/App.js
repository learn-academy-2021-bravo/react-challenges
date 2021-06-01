import React, {Component} from "react"
import DisplayFood from './components/displayFood'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      prices:
        {"apple": 0.50,
        "marshmellows": 1.50,
        "ramen": 0.50,
        },
      items:[
        "apple",
        "marshmellows",
        "ramen",
        "turkey"
      ]
    }
  }
  render(){
    console.log(this.state.prices);
    return(
      <>
      <h1>Food App</h1>
      <ul>
        {this.state.items.map((value) => {
          return <li>{ value }</li>
        })}
      </ul>
      <DisplayFood foodList= {
        this.state.items } 
        price= {this.state.prices}/>
      </>

    )
  }
}

export default App;
