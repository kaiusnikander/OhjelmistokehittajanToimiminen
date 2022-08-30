import { readFile } from "node:fs/promises";

export const getOstoslista = async () => {
  const ostoslista = await readFile("data/ostoslista.json");
  return JSON.parse(ostoslista);
};

export const haeBitcoininHinta = async () => {
  const page = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  return page.json();
}