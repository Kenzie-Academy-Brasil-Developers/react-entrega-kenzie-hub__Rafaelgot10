import { StyleNotFound } from "./styleNotFound";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <StyleNotFound>
      <h1>404 Not Found</h1>;
      <p>
        Você provavelmente está digitando o endereço da página de maneira
        incorreta <br />
        tente fazer o cadastro no nosso site:
      </p>
      <Link className="link" to="/register">
        {" "}
        Cadastro{" "}
      </Link>
    </StyleNotFound>
  );
}
