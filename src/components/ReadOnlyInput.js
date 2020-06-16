import React, { Component } from "react";

export default class ReadOnlyInput extends Component {
  render() {
    const { value, label, id } = this.props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} value={value} readOnly />{" "}
      </div>
    );
  }
}
