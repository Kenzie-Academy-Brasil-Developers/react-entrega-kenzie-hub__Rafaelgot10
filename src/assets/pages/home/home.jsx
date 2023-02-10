import { Link } from "react-router-dom";
import { StyleHome } from "./styleHome";

export function Home() {
  return (
    <StyleHome>
      <h1>Henzie Hub</h1>
      <p>
        Uma entrega semanal da Kenzie Academy Brasil que será refatorada
        posteriormente :
      </p>
      <Link className="link" to="/login">
        {" "}
        Login{" "}
      </Link>
    </StyleHome>
  );
}
