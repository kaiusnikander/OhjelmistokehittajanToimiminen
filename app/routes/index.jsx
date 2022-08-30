import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getOstoslista} from "~/api.server";

export const loader = async () => {
  const ostoslista = await getOstoslista();
  return json(ostoslista);
};

export default function Index() {
  const ostoslista = useLoaderData();
  const arvo = 20378.06

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Funikulaarin ja Logomon sillan hinta Bitcoineina</h1>
      <ul>
        {ostoslista.map((ostos, index) => {
          const nimi = ostos.nimi;
          const hinta = ostos.hinta;
          let lasku = hinta/arvo;
          return <li key={index}>{nimi} = {lasku}</li>;
        })}
      </ul>
    </div>
  );
}