export function quantidadeDiasMes(ano, mes) {
  return new Date(ano, mes + 1, 0).getDate();
}

export function primeiroDiaSemana(ano, mes) {
  return new Date(ano, mes, 1).getDay();
}

export function mesmaData(a, b) {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}
