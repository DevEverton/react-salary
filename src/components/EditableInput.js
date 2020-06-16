import React, { Component } from "react";
import { formatNumber } from "../helpers/formatHelpers.js";

export default class EditableInput extends Component {
  handleInputChange = (event) => {
    const newSalary = event.target.value;
    this.props.onInputChange(newSalary);
  };
  render() {
    const { inputSalary, label, id } = this.props;
    return (
      <div>
        <label className="active" htmlFor={id}>
          {label}
        </label>
        <input
          type="text"
          id={id}
          onChange={this.handleInputChange}
          value={inputSalary}
        />{" "}
      </div>
    );
  }
}
