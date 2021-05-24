import React, { Component } from 'react';
import './App.css';
import MadLibForm from './Components/MadLibForm'

class App extends Component {
  constructor(){
    super()
    this.state = {
      madLibs: null, 
    }
  }
  //return the <React.Fragment>
  //create form tag
  //make labels
  //write inputs
  //write type, value, name and onChange
  //create child component called MadLibForm
  //
  
  

  render(){

    return (
      <>
      
        {/* type = "clear"
        value = "clear"
        onClick = {this.handleClear} /> */}
        <MadLibForm handlemadLibsSubmit={ this.handlemadLibsSubmit } />
{ this.state.madLibs &&
<h1>{ this.state.madLibs }</h1>
}
      
      </>
    );
  }
}

export default App;
