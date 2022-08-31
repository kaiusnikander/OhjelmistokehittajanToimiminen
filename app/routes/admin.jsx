import { json } from "@remix-run/node";
import { useLoaderData, Form, Link } from "@remix-run/react";
import { getOstoslista, päivitäOstoslista} from "~/api.server";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  päivitäOstoslista(values);

  return null;
};

export const loader = async () => {
  const ostoslista = await getOstoslista();
  return json(ostoslista);
};

export default function Admin() {
    const ostoslista = useLoaderData();

    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <Link to="/">Etusivu</Link>
        <h1>Hallintasivu</h1>
        {ostoslista.map((ostos, index) => (
          <div key={index}>
            <Form method="post">
              <label>
                Nimi: <input name="nimi" defaultValue={ostos.nimi} />
              </label>{" "}
              <label>
                Määrä:{" "}
                <input name="määrä" type="number" defaultValue={ostos.määrä} />
              </label>
              <input type="hidden" name="index" value={index} />
              <button>Tallenna</button>
            </Form>
          </div>
        ))}
      </div>
    );
  }
