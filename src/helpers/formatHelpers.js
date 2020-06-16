function percentage(grossSalary, discount) {
  return (100 * discount) / grossSalary;
}

function localCurrency(value) {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

export { percentage, localCurrency };
