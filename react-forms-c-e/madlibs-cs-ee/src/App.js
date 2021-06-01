import React, {Component} from 'react'
import Madlib from './components/Madlib'
import './App.css'



class App extends Component {
  constructor(){
    super()
    this.state = {
      form: null
    }
  }

  handleFormSubmit= (newMadlib) =>{
    this.setState({ form: newMadlib})
    
  }
  

  render(){
    return(
      <React.Fragment>
          <div className = "header">Welcome to our Madlib! </div>
          
          <Madlib handleFormSubmit = {this.handleFormSubmit }/>
            {this.state.form && (
              <div className = "madlibbox">
                <p>Today I went to my favorite Taco Stand called the {this.state.form.adjective} {this.state.form.animal}.</p>
                <p>Unlike most food stands, they cook and prepare the food in a {this.state.form.vehicle} while you {this.state.form.verb}.</p>
                <p>The best thing on the menu is the {this.state.form.color} {this.state.form.noun}.</p>
                <p>Instead of ground beef they fill the taco with {this.state.form.foods1}, cheese, and top it off with a salsa made from {this.state.form.foods2}.</p>
                <p>If that doesn't make your mouth water, then it's just like {this.state.form.person} always says: {this.state.form.saying}!</p>
              </div>
            )}






         
      </React.Fragment>
    )
  }
}






export default App;
