import React, { Component } from 'react'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      picture:""
    }
  }
  getPic = () => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response => response.json())
    .then(payload => {
      this.setState({ picture: payload.photos})
      console.log(payload.photos)
    })


  }
  render() {
  return (
  <div>
    <h1>yo</h1>
    <button onClick={ this.getPic }>Get Pic</button>
    {this.state.picture && <img src={ this.state.picture[Math.floor(Math.random() * this.state.picture.length)].img_src } alt="random Mars Rover" style={{ height: "300px" }} />}
  </div>
  );
  }
}

export default App;
