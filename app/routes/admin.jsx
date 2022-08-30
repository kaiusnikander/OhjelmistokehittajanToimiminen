import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";

export default function Admin() {
    const ostoslista = useLoaderData();

    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Hallintasivu</h1>
        <nav>
        <Link to="/">Pääsivu</Link>{""}
        </nav>
        <form method="post" action="/projects/new">
      <p>
        <label>
          Muuttajan nimi: <input name="name" type="text" />
        </label>
      </p>
      <p>
        <label>
          Muutos:
          <br />
          <textarea name="description" />
        </label>
      </p>
      <p>
        <button type="submit">Create</button>
      </p>
    </form>
        </div>  
    );

    }
  
