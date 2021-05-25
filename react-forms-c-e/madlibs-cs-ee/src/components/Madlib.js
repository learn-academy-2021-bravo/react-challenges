import React, {Component} from 'react'
import '../App.css'


class Madlib extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                adjective: "",
                animal: "",
                vehicle: "",
                verb: "",
                color: "",
                noun: "",
                foods1: "",
                foods2: "",
                person: "",
                saying: "",
            }
        }

    }
handleChange = (e) => {
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form});
}

handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleFormSubmit(this.state.form)
    
}

    render(){

        return (
            <>
                <form className = 'form'>
                    <label>Adjective</label>
                    <input
                        type = 'text'
                        name = 'adjective'
                        value = {this.state.adjective}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <label>Animal</label>
                    <input
                        type = 'text'
                        name = 'animal'
                        value = {this.state.animal}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <label>Something that you ride in</label>
                    <input
                        type = 'text'
                        name = 'vehicle'
                        value = {this.state.vehicle}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <label>Verb</label>
                    <input
                        type = 'text'
                        name = 'verb'
                        value = {this.state.verb}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <label>Color</label>
                    <input
                        type = 'text'
                        name = 'color'
                        value = {this.state.color}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <label>Noun</label>
                    <input
                        type = 'text'
                        name = 'noun'
                        value = {this.state.noun}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <label>Plural Food</label>
                    <input
                        type = 'text'
                        name = 'foods1'
                        value = {this.state.foods1}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <label>Plural Food</label>
                    <input
                        type = 'text'
                        name = 'foods2'
                        value = {this.state.foods2}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <label>Person</label>
                    <input
                        type = 'text'
                        name = 'person'
                        value = {this.state.person}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <label>Saying</label>
                    <input
                        type = 'text'
                        name = 'saying'
                        value = {this.state.saying}
                        onChange = {this.handleChange}
                    />
                    <br />
                    <input
                    type = "submit"
                    value = "Submit Form"
                    onClick={ this.handleSubmit}
                    />
                </form>
            </>
        )
    }
}




export default Madlib;