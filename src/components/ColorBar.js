import React, { Component } from "react";
import css from "./styles.module.css";

export default class ColorBar extends Component {
  render() {
    const { value, color = "black" } = this.props;

    return (
      <div
        style={{
          marginTop: "40px",
          width: value + "%",
          height: "20px",
          backgroundColor: color,
        }}
      />
    );
  }
}
