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
        "turkey": 5,
        },
      items:[
        "apple",
        "marshmellows",
        "ramen",
        "turkey"
      ]
    }

    //our next step would be to create a method that gets passed down to displayfood, the method would be called on a buttonclick and informatin would get passed back up into parent component which will then update state.    
  }
  render(){
  
    return(
      <>
      <h1>Food App</h1>
      <ul>
        {this.state.items.map((value) =>{
          return <DisplayFood 
          //is passing individual items from this.state.items down to displayfood
          foodItem ={value} 

          //is passing the values from this.state.prices down to displayfoos
          price={this.state.prices[value]} />
        })}
      </ul>
     
      </>

    )
  }
}

export default App;
