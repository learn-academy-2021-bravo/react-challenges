import React,{Component} from "react";

class Form extends Component{
    constructor(){
       super();
       this.state = {
        form:{
            Noun1:"",
            Adjective1:"",
            Adverb:"",
            Verb:"",
            Adjective2:""         
        } 
       }     
    }
    
    handleChange = (event) => {  
      const {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form:form})
    }

    handleSubmit = (event) => {
       event.preventDefault();
       this.props.onSubmit(this.state.form); 
    }

    render(){
       return(
        <>
       <form>
           <label>Noun</label>
           <input name="Noun1" onChange={(event) => this.handleChange(event)} />
           <br />
           <label>Adjective</label>
           <input name="Adjective1" onChange={(event) => this.handleChange(event)}/>
           <br />
           <label>adverb</label>
           <input name="Adverb" onChange={(event) => this.handleChange(event)}/>
           <br />
           <label>verb</label>
           <input name="Verb" onChange={(event) => this.handleChange(event)}/>
           <br />
           <label>Adjective2</label>
           <input name="Adjective2" onChange={(event) => this.handleChange(event)}/>
           <br />
           <button onClick={this.handleSubmit}>Press Here</button>     
       </form>
       </> 
       )   
    }
}







export default Form;