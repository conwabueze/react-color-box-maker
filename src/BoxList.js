import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: [],
    };
    this.createBox = this.createBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }

  createBox(bgColor, height, width) {
    const boxes = [
      ...this.state.boxes,
      { id: uuidv4(), bgColor: bgColor, height: height, width: width },
    ];
    this.setState({ boxes: boxes });
  }

  deleteBox(id) {
    let boxes = [...this.state.boxes];
    boxes = boxes.filter((box) => box.id !== id);
    this.setState({ boxes: boxes });
  }

  render() {
    const renderBoxes = this.state.boxes.map((box) => (
      <Box
        deleteThisBox={this.deleteBox}
        id={box.id}
        bgColor={box.bgColor}
        height={box.height}
        width={box.width}
      />
    ));

    return (
      <div>
        <NewBoxForm createBox={this.createBox} />
        {renderBoxes}
      </div>
    );
  }
}

export default BoxList;
