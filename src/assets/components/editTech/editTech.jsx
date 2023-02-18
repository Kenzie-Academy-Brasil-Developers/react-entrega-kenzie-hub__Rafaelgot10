import { StyleEditTech } from "./styleEditTech.jsx";
import { useForm } from "react-hook-form";
import { api } from "../../services/api.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/userContext.jsx";

export function EditTech() {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { techid } = useParams();
  const { techtitle } = useParams();

  const { techs, setTechs, works, setWorks, user, setUser } =
    useContext(UserContext);

  const tech = techs.filter((tech) => tech.id == techid);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      status: tech[0].status,
    },
  });
  const onSubmitFunction = (data) => {
    editTech(data);
  };

  async function deleteTech() {
    try {
      const response = await api.delete(`/users/techs/${techid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechs = techs.filter((tech) => tech.id != techid);

      setTechs(newTechs);

      closeModal();
      toast.success(`Tecnologia ${tech[0].title} excluida com sucesso`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function editTech(data) {
    try {
      const response = await api.put(`/users/techs/${techid}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechs = techs.map((tech) => {
        if (tech.id == techid) {
          return response.data;
        } else {
          return tech;
        }
      });

      setTechs(newTechs);

      closeModal();
      toast.success(`Tecnologia ${response.data.title} editada com sucesso`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function closeModal() {
    navigate("/dash");
  }

  return (
    <StyleEditTech>
      <div className="header__container">
        <h2>Tecnologia Detalhes</h2>
        <span onClick={() => closeModal()}>X</span>
      </div>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <label htmlFor="title">Nome da tecnologia</label>
          <h2 className="techtitle">{techtitle}</h2>
        </div>

        <div>
          <label htmlFor="status">Novo status da Tecnologia</label>
          <select {...register("status")} id="status">
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
        </div>

        <div className="buttons__container">
          <button type="submit" className="save">
            Salvar alterações
          </button>
          <button onClick={() => deleteTech()} type="button" className="delete">
            Excluir
          </button>
        </div>
      </form>
    </StyleEditTech>
  );
}
