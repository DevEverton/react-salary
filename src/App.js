import React, { Component } from "react";
import EditableInput from "./components/EditableInput";
import { calculateSalaryFrom } from "./helpers/salary.js";
import ReadOnlyInput from "./components/ReadOnlyInput";
import { percentage, localCurrency } from "./helpers/formatHelpers.js";
import css from "./components/styles.module.css";

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

    const percentageOf = {
      discINSS: percentage(grossSalary, discountINSS),
      discIRPF: percentage(grossSalary, discountIRPF),
      netSalary: percentage(grossSalary, netSalary),
    };

    return (
      <div>
        <h1 className={css.title}>React Salário</h1>
        <div className={css.flexRow}>
          <div className={"row"}>
            <div className={"col l12 s12"}>
              <EditableInput
                id={"grossSalary"}
                label={"Salário Bruto"}
                inputSalary={grossSalary}
                onInputChange={this.handleInputChange}
              />
            </div>
            <div className="col l3 s6">
              <ReadOnlyInput
                id={"baseINSS"}
                label={"Base INSS"}
                value={`${localCurrency(baseINSS)}`}
              />
            </div>

            <div className="col l3 s6">
              <ReadOnlyInput
                id={"discountINSS"}
                color={"#e67e22"}
                label={"Desconto INSS"}
                value={`${localCurrency(
                  discountINSS
                )} (${percentageOf.discINSS.toFixed(2)}%) `}
              />
            </div>
            <div className="col l3 s6">
              <ReadOnlyInput
                id={"baseIRPF"}
                label={"Base IRPF"}
                value={localCurrency(baseIRPF)}
              />
            </div>
            <div className="col l3 s6">
              <ReadOnlyInput
                id={"discountIRPF"}
                color={"#c0392b"}
                label={"Desconto IRPF"}
                value={`${localCurrency(
                  discountIRPF
                )} (${percentageOf.discIRPF.toFixed(2)}%) `}
              />
            </div>
            <div className="col l3 s6">
              <ReadOnlyInput
                id={"netSalary"}
                color={"#16a085"}
                label={"Salário Líquido"}
                value={`${localCurrency(
                  netSalary
                )} (${percentageOf.netSalary.toFixed(2)}%) `}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
