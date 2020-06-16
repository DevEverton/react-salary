import React, { Component } from "react";
import css from "./styles.module.css";

export default class ReadOnlyInput extends Component {
  render() {
    const { value, label, id, color } = this.props;
    return (
      <div className={css.input}>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          value={value}
          style={{ fontWeight: "bold", color: color }}
          readOnly
        />{" "}
      </div>
    );
  }
}
