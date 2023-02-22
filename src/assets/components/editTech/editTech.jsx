import { StyleEditTech } from "./styleEditTech.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TechContext } from "../../provider/techContext.jsx";

export function EditTech() {
  const navigate = useNavigate();
  const { techid } = useParams();
  const { techtitle } = useParams();

  const { deleteTech, editTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({});

  const onSubmitFunction = (data) => {
    editTech(data, techid);
  };

  function closeModal() {
    navigate("/dash");
  }

  return (
    <StyleEditTech>
      <div role={"dialog"} className="header__container">
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
          <button
            onClick={() => deleteTech(techid, techtitle)}
            type="button"
            className="delete"
          >
            Excluir
          </button>
        </div>
      </form>
    </StyleEditTech>
  );
}
