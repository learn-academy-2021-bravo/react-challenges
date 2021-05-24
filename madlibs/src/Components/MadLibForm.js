import React, { Component } from "react";

export default class MadLibForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      madLibs: {
        noun1: "",
        verb: "",
        noun2: "",
        noun3: "",
        adjective: "",
        verb2: "",
        adjective2: "",
        noun4: "",
      },
    };
  }
  handleChange = (e) => {
    const { madLibs } = this.state;
    madLibs[e.target.name] = e.target.value;
    this.setState({ madLibs: madLibs });
  };

  handleSubmit = (e) => {
    this.props.handlemadLibsSubmit(this.state.madLibs);
  };
  render() {
    return (
      <>
        <form>
          <label>Give me a noun:</label>
          <input
            type="text"
            name="noun"
            value={this.state.noun}
            onChange={this.handleChange}
          />
          <br />
          <label>Give me a verb:</label>
          <input
            type="text"
            name="verb"
            value={this.state.verb}
            onChange={this.handleChange}
          />
          <br />
          <label>Give me a noun:</label>
          <input
            type="text"
            name="noun"
            value={this.state.noun}
            onChange={this.handleChange}
          />
          <br />
          <label>Give me a noun:</label>
          <input
            type="text"
            name="noun"
            value={this.state.noun}
            onChange={this.handleChange}
          />
          <br />
          <label>Give me a adjective:</label>
          <input
            type="text"
            name="adjective"
            value={this.state.adjective}
            onChange={this.handleChange}
          />
          <br />
          <label>Give me a verb:</label>
          <input
            type="text"
            name="verb"
            value={this.state.verb}
            onChange={this.handleChange}
          />
          <br />
          <label>Give me a adjective:</label>
          <input
            type="text"
            name="adjective"
            value={this.state.adjective}
            onChange={this.handleChange}
          />
          <br />
          <label>Give me a noun:</label>
          <input
            type="text"
            name="noun"
            value={this.state.noun}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="submit" onClick={this.handleSubmit} />
          <button>Clear</button>
        </form>
      </>
    );
  }
}
