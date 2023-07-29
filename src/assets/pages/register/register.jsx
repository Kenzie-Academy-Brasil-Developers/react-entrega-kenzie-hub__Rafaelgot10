import { Link } from "react-router-dom";
import { StyleRegister } from "./styleRegister.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../provider/userContext.jsx";
import { registerFormSchema } from "./validations.jsx";

export function Register() {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmitFunction = (data) => {
    reset();
    createUser(data);
  };

  return (
    <StyleRegister>
      <div>
        <h1>Kenzie Hub</h1>
        <Link className="link" to="/">
          {" "}
          Voltar{" "}
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <span>Rapido e gratis, vamos nessa</span>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite aqui sua Senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirme sua Senha</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Digite aqui sua Senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <input
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>
        </div>

        <div>
          <label htmlFor="contact">Contato</label>
          <input
            id="contact"
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>
        </div>

        <div>
          <label htmlFor="modulo">Selecionar módulo</label>
          <select id="modulo" {...register("course_module")}>
            <option disabled selected>
              Selecione seu módulo
            </option>
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Introdução ao Backend)</option>
            <option>Quarto módulo (Backend Avançado)</option>
          </select>
          <span>{errors.course_module?.message}</span>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </StyleRegister>
  );
}
