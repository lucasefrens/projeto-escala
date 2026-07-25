import { DATA_INICIO_PLANTAO, INTERVALO_PLANTAO } from "./constants.js";

const UM_DIA = 1000 * 60 * 60 * 24;

export function ehPlantao(data) {
  const inicio = new Date(DATA_INICIO_PLANTAO);

  inicio.setHours(0, 0, 0, 0);

  const atual = new Date(data);

  atual.setHours(0, 0, 0, 0);

  const diferenca = Math.floor((atual - inicio) / UM_DIA);

  return diferenca >= 0 && diferenca % INTERVALO_PLANTAO === 0;
}
