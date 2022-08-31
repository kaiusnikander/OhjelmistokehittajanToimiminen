import { readFile } from "node:fs/promises";

export const getOstoslista = async () => {
  const ostoslista = await readFile("data/ostoslista.json");
  return JSON.parse(ostoslista);
};

export const haeBitcoininHinta = async () => {
  const page = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  return page.json();
}

export const päivitäOstoslista = async (rivi) => {
  const ostoslistaJSON = await readFile("data/ostoslista.json");
  const ostoslista = JSON.parse(ostoslistaJSON);
  const muokattavaRivi = ostoslista[rivi.index];
  
  
  ostoslista[rivi.index] = {
    ...muokattavaRivi,
    nimi: rivi.nimi,
    määrä: Number(rivi.määrä),
  };
  
  const pävitettyOstoslistaJSON = JSON.stringify(ostoslista, null, 2);
  await writeFile("data/ostoslista.json", pävitettyOstoslistaJSON);
};