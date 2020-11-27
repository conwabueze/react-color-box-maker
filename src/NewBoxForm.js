import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: "",
      height: "",
      width: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleCreateBox = this.handleCreateBox.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCreateBox(e) {
    e.preventDefault();
    const { bgColor, height, width } = this.state;
    this.props.createBox(bgColor, height, width);
    this.setState({
      bgColor: "",
      height: "",
      width: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleCreateBox}>
        <label htmlFor="bgColor">BackgroundColor: </label>
        <input
          name="bgColor"
          value={this.state.bgColor}
          onChange={this.handleInput}
        ></input>
        <br></br>
        <label htmlFor="height">Height: </label>
        <input
          name="height"
          value={this.state.height}
          onChange={this.handleInput}
        ></input>
        <br></br>
        <label htmlFor="width">Width: </label>
        <input
          name="width"
          value={this.state.width}
          onChange={this.handleInput}
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    );
  }
}

export default NewBoxForm;
