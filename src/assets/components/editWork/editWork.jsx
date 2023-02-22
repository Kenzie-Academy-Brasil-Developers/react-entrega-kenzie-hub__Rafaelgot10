import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { StyleEditWork } from "./styleEditWork.jsx";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { WorkContext } from "../../provider/workContext.jsx";

export function EditWork() {
  const navigate = useNavigate();
  const { workid } = useParams();
  const { worktitle } = useParams();

  const { works, editWork, deleteWork } = useContext(WorkContext);

  const formSchema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    deploy_url: yup.string().url("Deve ser uma url"),
  });

  const onSubmitFunction = (data) => {
    editWork(data, workid);
  };

  const work = works.filter((work) => work.id == workid);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: work[0].title,
      description: work[0].description,
      deploy_url: work[0].deploy_url,
    },
    node: "onBlur",
    resolver: yupResolver(formSchema),
  });

  function closeModal() {
    navigate("/dash");
  }

  return (
    <StyleEditWork>
      <div className="header__container">
        <h2>Projeto Detalhes</h2>
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

        <div className="buttons__container">
          <button type="submit" className="save">
            Salvar alterações
          </button>
          <button
            onClick={() => deleteWork(workid, worktitle)}
            type="button"
            className="delete"
          >
            Excluir
          </button>
        </div>
      </form>
    </StyleEditWork>
  );
}
