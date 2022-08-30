import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getOstoslista} from "~/api.server";
import { Link } from "@remix-run/react";
import { Form } from "@remix-run/react";

export const loader = async () => {
  const ostoslista = await getOstoslista();
  return json(ostoslista);
};

export default function Admin() {
    const ostoslista = useLoaderData();
    const arvo = 20378.06

    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Hallintasivu</h1>
        <nav>
        <Link to="/">Pääsivu</Link>{""}
        </nav>

        <Form method="get" action="">
        {ostoslista.map((ostos, index) => {
          const nimi = ostos.nimi;
          const hinta = ostos.hinta;
          let lasku = hinta/arvo;
          return <li key={index}>{nimi} = {lasku}</li>;
        })}
      <div>
      <p>
        <label>
          Muuttajan nimi: <input name="name" type="text" />
        </label>
      </p>
      <p>
        <label>
          Hinta:
          <input name="name" type="text" />
        </label>
      </p>
      </div>
      <p>
        <button type="submit">Create</button>
      </p>
    </Form>
        </div>  
    );

    }
  
