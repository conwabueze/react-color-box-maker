import React, { Component } from "react";

class Box extends Component {
  static defaultProps = {
    bgColor: "red",
    height: 100,
    width: 100,
  };

  constructor(props) {
    super(props);

    this.handleDeleteBox = this.handleDeleteBox.bind(this);
  }

  handleDeleteBox(e) {
    this.props.deleteThisBox(this.props.id);
  }

  render() {
    const { bgColor, height, width } = this.props;
    const style = {
      backgroundColor: bgColor,
      height: `${height}px`,
      width: `${width}px`,
    };
    return (
      <div>
        <div style={style} className="Box"></div>
        <button onClick={this.handleDeleteBox}>X</button>
      </div>
    );
  }
}

export default Box;
