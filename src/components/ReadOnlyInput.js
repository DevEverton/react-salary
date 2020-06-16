import React, { Component } from "react";

export default class ReadOnlyInput extends Component {
  render() {
    const { value, label, id } = this.props;
    return (
      <div>
        <label className="active" htmlFor={id}>
          {label}
        </label>
        <input
          type="text"
          id={id}
          onChange={this.handleInputChange}
          value={value}
          readOnly
        />{" "}
      </div>
    );
  }
}
