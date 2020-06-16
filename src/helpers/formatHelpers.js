const formatter = Intl.NumberFormat("pt-BR");

function formatNumber(value) {
  return formatter.format(value);
}

function percentage(grossSalary, discount) {
  return (100 * discount) / grossSalary;
}

export { formatNumber, percentage };
