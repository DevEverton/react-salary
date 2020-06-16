import React, { Component } from "react";
import EditableInput from "./components/EditableInput";
import { calculateSalaryFrom } from "./helpers/salary.js";
import ReadOnlyInput from "./components/ReadOnlyInput";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      grossSalary: "",
      baseINSS: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      netSalary: 0,
    };
  }

  handleInputChange = (inputSalary) => {
    this.setState({ grossSalary: inputSalary });
  };
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
    const {
      grossSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.state;

    return (
      <div>
        <h1>React Salário</h1>
        <EditableInput
          id={"grossSalary"}
          label={"Salário Bruto"}
          inputSalary={grossSalary}
          onInputChange={this.handleInputChange}
        />
        <ReadOnlyInput id={"baseINSS"} label={"Base INSS"} value={baseINSS} />
        <ReadOnlyInput
          id={"discountINSS"}
          label={"Desconto INSS"}
          value={discountINSS}
        />
        <ReadOnlyInput id={"baseIRPF"} label={"Base IRPF"} value={baseIRPF} />
        <ReadOnlyInput
          id={"discountIRPF"}
          label={"Desconto IRPF"}
          value={discountIRPF}
        />
        <ReadOnlyInput
          id={"metSalary"}
          label={"Salário Líquido"}
          value={netSalary}
        />
      </div>
    );
  }
}
