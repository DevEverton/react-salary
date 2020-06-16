import React, { Component } from "react";
import css from "./styles.module.css";

export default class EditableInput extends Component {
  handleInputChange = (event) => {
    const newSalary = event.target.value;
    this.props.onInputChange(newSalary);
  };
  render() {
    const { inputSalary, label, id } = this.props;
    return (
      <div className={css.input}>
        <label className="active" htmlFor={id}>
          {label}
        </label>
        <input
          type="text"
          id={id}
          onChange={this.handleInputChange}
          style={{ fontWeight: "bold" }}
          value={inputSalary}
        />{" "}
      </div>
    );
  }
}
