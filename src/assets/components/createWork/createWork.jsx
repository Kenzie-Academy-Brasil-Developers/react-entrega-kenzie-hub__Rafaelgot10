import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StyleCreateWork } from "./styleCreateWork.jsx";
import { WorkContext } from "../../provider/workContext.jsx";

export function CreateWork() {
  const formSchema = yup.object().shape({
    title: yup.string().required("Nome do trabalho obrigatório"),
    description: yup.string(),
    deploy_url: yup.string().url("Deve ser uma url"),
  });

  const { createWork } = useContext(WorkContext);

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
    createWork(data);
  };

  function closeModal() {
    navigate("/dash");
  }

  return (
    <StyleCreateWork>
      <div>
        <div className="header__container">
          <h2>Cadastrar Projeto</h2>
          <span onClick={() => closeModal()}>X</span>
        </div>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <label htmlFor="title">Nome</label>
            <input
              id="title"
              type="text"
              placeholder="Nome do Projeto"
              {...register("title")}
            />
            <span>{errors.title?.message}</span>
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <textarea
              rows="10"
              cols="33"
              id="description"
              type="text"
              placeholder="Descrição do projeto"
              {...register("description")}
            />
            <span>{errors.description?.message}</span>
          </div>

          <div>
            <label htmlFor="deploy_url">URL do Projeto</label>
            <input
              id="deploy_url"
              type="text"
              placeholder="Endereço do dominio"
              {...register("deploy_url")}
            />
            <span>{errors.deploy_url?.message}</span>
          </div>

          <button type="submit">Cadastrar Projeto</button>
        </form>
      </div>
    </StyleCreateWork>
  );
}
