export async function getConstituyentes() {
  const constituyentes = await import('@/mockData/constituyentes/constituensList.json');
  return constituyentes.data.constituents;
}

export async function getSummaryByName(name) {
  const validNames = ["AGUAS-A", "ANDINA-B", "BCI", "BSANTANDER", "CAP", "IPSA"];

  if (!validNames.includes(name)) return;

  const data = await import(`@/mockData/resumen/${name}.json`);

  if (!data) return {};

  return data;
}

export async function getHistoryByName(name) {
  const validNames = ["AGUAS-A", "ANDINA-B", "BCI", "BSANTANDER", "CAP", "IPSA"];

  if (!validNames.includes(name)) return;

  const data = await import(`@/mockData/history/history-${name}.json`);

  if (!data) return {};

  return data;
}