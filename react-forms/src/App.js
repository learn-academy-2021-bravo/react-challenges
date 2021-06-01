import React, { Component } from "react";
import Form from "./components/form";


class App extends Component{
  constructor(){
    super();
    this.state = {
      form : null
    }
  }
  
  onSubmit = (info) => {
    this.setState({form:info})

  }

  render(){


    return <>

    <h1>MADLIBS</h1>
    <Form 
    onSubmit={this.onSubmit}
    />
    {this.state.form && <div>
      <h1>MADLIB STORY</h1> 
      <p>
        {`One ${this.state.form.Adjective1} summer morning, the zebras woke up to see three ${this.state.form.Adjective2} monkeys. They were unlocking the door to their pen! the Zebras ${this.state.form.Adverb} ran through the open door, then ${this.state.form.Verb} behind a nerby ${this.state.form.Noun1}`}
      </p>
      </div>}
    </>
  }
}





export default App;
