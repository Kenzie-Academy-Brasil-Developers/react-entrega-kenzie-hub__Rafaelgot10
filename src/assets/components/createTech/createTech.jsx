import { StyleCreateTech } from "./styleCreateTech.jsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { TechContext } from "../../provider/techContext.jsx";

export function CreateTech() {
  const formSchema = yup.object().shape({
    title: yup.string().required("Nome da tecnologia obrigatório"),
    status: yup.string().required("status obrigatório"),
  });

  const { createTech } = useContext(TechContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    createTech(data);
  };

  function closeModal() {
    navigate("/dash");
  }

  return (
    <StyleCreateTech>
      <div>
        <div role={"dialog"} className="header__container">
          <h2>Cadastrar Tecnologia</h2>
          <span onClick={() => closeModal()}>X</span>
        </div>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <label htmlFor="title">Nome</label>
            <input
              id="title"
              type="text"
              placeholder="Nome da Tecnologia"
              {...register("title")}
            />
            <span>{errors.title?.message}</span>
          </div>

          <div>
            <label htmlFor="status">Selecionar status</label>
            <select {...register("status")} id="status">
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </div>

          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyleCreateTech>
  );
}
