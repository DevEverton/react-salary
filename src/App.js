import React, { Component } from "react";
import EditableInput from "./components/EditableInput";
import { calculateSalaryFrom } from "./helpers/salary.js";
import ReadOnlyInput from "./components/ReadOnlyInput";
import { percentage, localCurrency } from "./helpers/formatHelpers.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      grossSalary: "1000",
      baseINSS: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      netSalary: 0,
    };
  }
  componentDidMount() {
    this.getDataFromSalary(1000);
  }

  handleInputChange = (inputSalary) => {
    this.setState({ grossSalary: inputSalary });
    this.getDataFromSalary(inputSalary);
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

    console.log();

    return (
      <div>
        <h1>React Salário</h1>
        <EditableInput
          id={"grossSalary"}
          label={"Salário Bruto"}
          inputSalary={grossSalary}
          onInputChange={this.handleInputChange}
        />
        <ReadOnlyInput
          id={"baseINSS"}
          label={"Base INSS"}
          value={localCurrency(baseINSS)}
        />
        <ReadOnlyInput
          id={"discountINSS"}
          label={"Desconto INSS"}
          value={`${localCurrency(discountINSS)} (${percentage(
            grossSalary,
            discountINSS
          ).toFixed(2)}%) `}
        />
        <ReadOnlyInput
          id={"baseIRPF"}
          label={"Base IRPF"}
          value={localCurrency(baseIRPF)}
        />
        <ReadOnlyInput
          id={"discountIRPF"}
          label={"Desconto IRPF"}
          value={`${localCurrency(discountIRPF)} (${percentage(
            grossSalary,
            discountIRPF
          ).toFixed(2)}%) `}
        />
        <ReadOnlyInput
          id={"netSalary"}
          label={"Salário Líquido"}
          value={`${localCurrency(netSalary)} (${percentage(
            grossSalary,
            netSalary
          ).toFixed(2)}%) `}
        />
      </div>
    );
  }
}
