import React, { Component } from 'react'
import Forms from './Forms'

export default class MadLibs extends Component {
    constructor() {
        super()
        this.state = {
            madLibs: null
        }
    }
    
    handleSubmitClick=(form) => {
        this.setState({ madLibs: form})
    }
    render() {
        return (
            <div>
                <h1>MadLibs</h1>
                <Forms handleSubmitClick = {this.handleSubmitClick}/>
                {this.state.madLibs && (<div><p>Once upon a time there lived a very sad banana named {this.state.madLibs.boysName}. {this.state.madLibs.boysName} lived in a {this.state.madLibs.typeOfPackaging} in Fruitsville. He was sad because he had no friends, but then he thought, "How am I going to get friends if I don't go looking for some? I am going to go out and look for some friends."</p>
                <p>So {this.state.madLibs.boysName} put on his {this.state.madLibs.fashionAcessory} to impress people and went out to {this.state.madLibs.place}. He was walking around the {this.state.madLibs.place} when he met a nice lady banana called {this.state.madLibs.girlsName}. She said, "Hello, my name is {this.state.madLibs.girlsName} . Do you want to go to {this.state.madLibs.park} and go on the {this.state.madLibs.park} attractions? {this.state.madLibs.boysName}, "OK, If you will be my friend." "Yes!" She replied. {this.state.madLibs.boysName} and {this.state.madLibs.park} became good friends and {this.state.madLibs.boysName} wasn't sad anymore.</p>
                <p>~The End~</p></div>)}
                
            </div>
        )
    }
}
