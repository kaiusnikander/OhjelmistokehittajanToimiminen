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
        </div>  
    );

    }
  
