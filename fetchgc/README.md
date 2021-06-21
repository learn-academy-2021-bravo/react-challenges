import React, {Component} from 'react'

class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      ip:""
    }
  }

getIP = () => {
  fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(payload => {
  this.setState({ip: payload }) 
})
}
render () {
  console.log(this.state.ip)
  return (
    <>
      <h1>IP info</h1>
      <button onClick = { this.getIP }>get your IP infooo</button>
      <p>your IP adress is: {this.state.ip.ip} </p>
      <p>your city is: {this.state.ip.city} </p>
      <p>your time zone is: {this.state.ip.timezone} </p>
    </>
  )
}


}
export default App;