import React, {Component} from 'react' 

class App extends Component {
  constructor(props){
    super (props)
    this.state = {
    links: "",
    // name: ""
    }
  }

  // getIP = () => {
  //   fetch("https://ipapi.co/json/")
  //   .then(response => response.json())
  //   .then(payload => {
  //     this.setState({ ip: payload })
  //   }) 
  // }

  

  getIP = () => {
    fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    .then(response => response.json())
    .then(payload => {
      this.setState({ links: payload })
    }) 
  }
  
  render() {
    return(
      <>
        <h1>IP app</h1>
        <button onClick={ this.getIP }> Click for IP info </button>
        <p> Your asteroid ID is: { this.state.links.id } </p>
        <p> Your asteroid name is: { this.state.links.name } </p>
      </>
    )
  }

}

export default App;

// render() {
//   return(
//     <>
//       <h1>IP app</h1>
//       <button onClick={ this.getIP }> Click for IP info </button>
//       <p> Your IP address is: { this.state.ip.ip } </p>
//       <p> Your city is: { this.state.ip.city } </p>
//     </>
//   )
// }

// }