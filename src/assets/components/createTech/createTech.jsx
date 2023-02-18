import { StyleCreateTech } from "./styleCreateTech.jsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/userContext.jsx";

export function CreateTech() {
  const formSchema = yup.object().shape({
    title: yup.string().required("Nome da tecnologia obrigatório"),
    status: yup.string().required("status obrigatório"),
  });

  const { techs, setTechs } = useContext(UserContext);

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
    createTech(data);
  };

  async function createTech(data) {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechs([...techs, response.data]);

      closeModal();

      toast.success("Tecnologia adicionada com sucesso");
    } catch (error) {
      if (
        error.response.data.message ==
        "User Already have this technology created you can only update it"
      ) {
        toast.error("Parece que você já tem essa tecnologia cadastrada");
      }
      console.error(error);
    }
  }

  function closeModal() {
    navigate("/dash");
  }

  return (
    <StyleCreateTech>
      <div>
        <div className="header__container">
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
