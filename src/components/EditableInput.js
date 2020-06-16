import React, { Component } from "react";

export default class EditableInput extends Component {
  render() {
    return (
      <div>
        <label className="active" htmlFor="bruto">
          Salário Bruto
        </label>
        <input type="text" id="bruto" />{" "}
      </div>
    );
  }
}
