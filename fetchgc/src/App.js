import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
    pic: null
    }
  }

  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => response.json())
    .then(payload => this.setState({ pic: payload.url}))
    .catch(error => console.log(error))
  }
  render(){
    console.log(this.state.pic)
    return (
      <>
        <h1>This is the astronomy pic of the day</h1>
        <button onClick={this.getPic}>get your photo of the day</button>

        <br/>

        {this.state.pic && <img src ={this.state.pic } alt= "Apod" style={{height: "300px" }} />}





      </>
    )
  }
}

export default App;
