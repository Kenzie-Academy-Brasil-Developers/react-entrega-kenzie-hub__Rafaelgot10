import { StyleLogin } from "./styleLogin.jsx";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <StyleLogin>
      <h1>Kenzie Hub</h1>

      <form>
        <h2>Login</h2>
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Digite seu Email..." />

        <label for="senha">Senha</label>
        <input id type="password" placeholder="Digite sua Senha..." />

        <button type="submit">Entrar</button>
        <span>Ainda não possui uma conta?</span>

        <Link className="link" to="/register">
          {" "}
          Cadastre-se{" "}
        </Link>
      </form>
    </StyleLogin>
  );
}
