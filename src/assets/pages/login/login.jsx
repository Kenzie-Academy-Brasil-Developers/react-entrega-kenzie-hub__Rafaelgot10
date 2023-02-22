import { StyleLogin } from "./styleLogin.jsx";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../provider/userContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

export function Login() {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("email invalido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const { loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token != null) {
      navigate("/dash");
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    node: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    loginUser(data);
  };

  return (
    <StyleLogin>
      <h1>Kenzie Hub</h1>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Digite seu Email..."
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua Senha..."
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>

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
