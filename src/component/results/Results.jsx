import React, { Component } from "react";

class Results extends Component {
  state = {
    name: "",
  };
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>Birth Year: {this.props.birthYear}</h2>
        <h2>Eye Color: {this.props.eyeColor}</h2>
        <h2>Skin Color: {this.props.skinColor}</h2>
      </div>
    );
  }
}

export default Results;
