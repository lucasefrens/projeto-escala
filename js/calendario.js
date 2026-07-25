import { MESES, DIAS_SEMANA } from "./constants.js";
import { quantidadeDiasMes, primeiroDiaSemana, mesmaData } from "./datas.js";
import { ehPlantao } from "./escala.js";

export function criarCalendario(ano) {
  const calendario = document.getElementById("calendario");

  calendario.innerHTML = "";

  for (let mes = 0; mes <= 11; mes++) {
    const elementoMes = criarMes(ano, mes);

    calendario.appendChild(elementoMes);
  }
}

function criarMes(ano, mes) {
  const elemento = document.createElement("article");

  elemento.className = "mes-calendario";

  elemento.append(
    criarTitulo(mes, ano),
    criarDiasSemana(),
    criarDias(ano, mes),
  );

  return elemento;
}

function criarTitulo(mes, ano) {
  const titulo = document.createElement("h2");

  titulo.className = "titulo";

  titulo.textContent = `${MESES[mes]} ${ano}`;

  return titulo;
}

function criarDiasSemana() {
  const container = document.createElement("div");

  container.className = "dias-semana";

  DIAS_SEMANA.forEach((nome) => {
    const dia = document.createElement("span");

    dia.textContent = nome;

    container.appendChild(dia);
  });

  return container;
}

function criarDias(ano, mes) {
  const container = document.createElement("div");

  container.className = "dias-calendario";

  const primeiroDia = primeiroDiaSemana(ano, mes);

  for (let i = 0; i < primeiroDia; i++) {
    container.appendChild(criarDia(null, { vazio: true }));
  }

  const diasNoMes = quantidadeDiasMes(ano, mes);
  const dataHoje = new Date();

  for (let dia = 1; dia <= diasNoMes; dia++) {
    const data = new Date(ano, mes, dia);

    const plantao = ehPlantao(data);
    const hoje = mesmaData(data, dataHoje);

    container.appendChild(criarDia(dia, { plantao, hoje }));
  }

  return container;
}

function criarDia(
  numero,
  { plantao = false, hoje = false, vazio = false } = {},
) {
  const elemento = document.createElement("div");

  elemento.className = "dia-calendario";

  if (vazio) {
    elemento.classList.add("-vazio");
    return elemento;
  }

  elemento.textContent = numero;

  if (plantao) {
    elemento.classList.add("-plantao");
  }

  if (hoje) {
    elemento.classList.add("-hoje");
  }

  return elemento;
}
