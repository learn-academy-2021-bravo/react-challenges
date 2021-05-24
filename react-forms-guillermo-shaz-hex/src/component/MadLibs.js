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
                {this.state.madLibs && (<div><p>Once upon a time there lived a very sad banana named {this.state.madLibs.boysName}. A boy's name lived in a A type of packaging in Fruitsville. He was sad because he had no friends, but then he thought, "How am I going to get friends if I don't go looking for some? I am going to go out and look for some friends."</p>
                <p>So A boy's name put on his A fashion accessory to impress people and went out to A place. He was walking around A place when he met a nice lady banana called A girl's name. She said, "Hello, my name is A girl's name. Do you want to go to A park, and go on the A park attraction? A boy's name said, "OK, If you will be my friend." "Yes!" She replied. So A boy's name and A girl's name became good friends and A boy's name wasn't sad anymore.</p>
                <p>~The End~</p></div>)}
                
            </div>
        )
    }
}
