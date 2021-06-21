import React, { Component } from 'react'

export default class App extends Component {
  constructor(prop){
    super()
    this.state = {
      ip: ""
    }
  }
componentDidMount(){
  fetch('https://ipapi.co/json/').then(response =>{
    // the response above, is the parameter or argumnet 
    return response.json()
    // this line above, is taking the response and turning it into json
  }).then(payload =>this.setState({ip: payload})).catch(error => console.log(error))

    //the payload is giving us the json data 
    //and now we can set json into ip state
    // this.setState takes in an object 
    //.catch(error) this will be incase I get an error

}

  render() {
    console.log(this.state.ip)
    return (
      <div>
        <h1>Current ip adress</h1>
        <h4>{this.state.ip.ip}</h4>
        <h4>{this.state.ip.city}</h4>
      </div>
    )
  }
}
