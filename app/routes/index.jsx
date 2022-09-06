import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { haeBitcoininHinta, getOstoslista} from "~/api.server";
import { Link } from "@remix-run/react";


export const loader = async () => {
  const ostoslista = await getOstoslista();
  const bitcoininHinta = await haeBitcoininHinta();
  return json({ ostoslista, bitcoininHinta });
};

export default function Index() {
  const {ostoslista, bitcoininHinta} = useLoaderData();
  const arvo = bitcoininHinta.bpi.EUR.rate_float

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Funikulaarin ja Logomon sillan hinta Bitcoineina</h1>
      <Link to="/admin">Hallintasivu</Link>{""}
      <ul>
        {ostoslista.map((ostos, index) => {
          const nimi = ostos.nimi;
          const hinta = ostos.hinta;
          let lasku = hinta/arvo;
          return <li key={index}>{nimi} = {lasku} ₿</li>;
        })}
      </ul>
    </div>
  );
}