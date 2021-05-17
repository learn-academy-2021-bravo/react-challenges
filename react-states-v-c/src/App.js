import React, {Component} from 'react';
import './App.css'
 
class App extends Component {
    constructor(){
        super()
        this.state ={
            color: ["green", "blue", "yellow", "red", "purple", "orange"],
            currentColor: ""

        }
    }

    changeColors = () => {
        let randomIndex = Math.floor(Math.random() * this.state.color.length )
        this.setState({ currentColor: this.state.color[randomIndex] })
        // Added this here this.state)
        //  <button onClick={ this.handleMoodOptions }> added this here
      }

    render(){
          return (
              <>
             <div className="square" onClick={this.colorChange}>{this.state.currentColor}</div>
              </>
          )

      }
}



// As a user, I can see a white square on the screen
// As a user, when I click on the square the name of a color appears in the box
// As a user, each time I click the box I see a new color name
// As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange
// As a user, when I click the box, the background changes to match the name of the color name displayed in the box
// As a user, I can see many color boxes on the page all acting independently of one another
