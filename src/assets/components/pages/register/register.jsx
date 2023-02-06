import { Link } from "react-router-dom";
import { StyleRegister } from "./styleRegister.jsx";

export function Register() {
  return (
    <StyleRegister>
      <div>
        <h1>Kenzie Hub</h1>
        <Link className="link" to="/login">
          {" "}
          Voltar{" "}
        </Link>
      </div>

      <form>
        <h2>Crie sua conta</h2>
        <span>Rapido e gratis, vamos nessa</span>

        <label for="nome">Nome</label>
        <input id="nome" type="text" placeholder="Digite aqui seu nome" />

        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Digite aqui seu email" />

        <label for="senha">Senha</label>
        <input id type="password" placeholder="Digite aqui sua Senha" />

        <label for="senha">Confirme sua Senha</label>
        <input id type="password" placeholder="Digite aqui sua Senha" />

        <label for="bio">Bio</label>
        <input id="bio" type="text" placeholder="Fale sobre você" />

        <label for="contato">Contato</label>
        <input id="contato" type="text" placeholder="Opção de contato" />

        <label for="modulo">Selecionar módulo</label>
        <select name="modulo" id="modulo">
          <option>Selecione seu módulo</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </StyleRegister>
  );
}
