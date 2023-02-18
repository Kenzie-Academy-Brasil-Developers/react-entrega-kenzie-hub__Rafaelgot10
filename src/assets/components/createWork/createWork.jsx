import * as yup from "yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/userContext.jsx";
import { StyleCreateWork } from "./styleCreateWork.jsx";

export function CreateWork() {
  const formSchema = yup.object().shape({
    title: yup.string().required("Nome do trabalho obrigatório"),
    description: yup.string(),
    deploy_url: yup.string().url("Deve ser uma url"),
  });

  const { works, setWorks } = useContext(UserContext);

  let token = localStorage.getItem("token");
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

  async function createWork(data) {
    try {
      const response = await api.post("/users/works", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setWorks([...works, response.data]);

      closeModal();

      toast.success(`Projeto ${response.data.title} adicionado com sucesso`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

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
