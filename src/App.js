import React, { Component } from "react";
import EditableInput from "./components/EditableInput";
import { calculateSalaryFrom } from "./helpers/salary.js";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      grossSalary: 0,
      baseINSS: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      netSalary: 0,
    };
  }

  componentDidMount() {
    this.getDataFromSalary(10000);
  }

  handleInput = (event) => {};
  getDataFromSalary = (grossSalary) => {
    let data = calculateSalaryFrom(grossSalary);
    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = data;

    this.setState({
      grossSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    });
  };
  render() {
    return (
      <div>
        <h1>React Salário</h1>
        <EditableInput />
      </div>
    );
  }
}
