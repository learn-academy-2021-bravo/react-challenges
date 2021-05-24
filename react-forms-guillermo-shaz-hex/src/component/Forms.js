import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form : {
                boysName: "",
                typeOfPackaging : "",
                fashionAcessory : "",
                place: "",
                girlsName: "",
                park: "", 
            }
            
        }
    }
    onChange = (event) => {
        console.log(event.target.name)
        const {form} = this.state;
        form[event.target.name] = event.target.value
        console.log("form", form)
        this.setState({form: form})

    };
    handleSubmit = (event) => {
        event.preventDefault()
     this.props.handleSubmitClick(this.state.form)
    }
    render() {
        return (
            <div>
                <form>
                    <label>Boys Name</label>
                    <input
                    type="text"
                    name= "boysName" 
                    value = {this.state.form.boysName}
                    onChange ={this.onChange}
                    />
                    <br/>

                    <label>Type of Packaging</label>
                    <input
                    type="text"
                    name= "typeOfPackaging" 
                    value = {this.state.form.typeOfPackagings}
                    onChange ={this.onChange}
                    />
                    <br/>
                    <label>Fashion Acessory</label>
                    <input
                    type="text"
                    name= "fashionAcessory" 
                    value = {this.state.form.fashionAcessory}
                    onChange ={this.onChange}
                    />
                    <br/>
                    <label>place</label>
                    <input
                    type="text"
                    name= "place" 
                    value = {this.state.form.place}
                    onChange ={this.onChange}
                    />
                    <br/>
                    <label>Girls Name</label>
                    <input
                    type="text"
                    name= "girlsName" 
                    value = {this.state.form.girlsName}
                    onChange ={this.onChange}
                    />

                    <br/>
                    <label>Park</label>
                    <input
                    type="text"
                    name= "park" 
                    value = {this.state.form.park}
                    onChange ={this.onChange}
                    />
                    <br/>
                    <input
                    type="submit"
                    value="submit madlib words"
                    onClick={this.handleSubmit}
                    
                    />


                </form>
                
            </div>
        )
    }
}
