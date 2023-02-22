import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const [techs, setTechs] = useState([]);

  function closeModal() {
    navigate("/dash");
  }

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

  async function deleteTech(techid, techtitle) {
    try {
      const response = await api.delete(`/users/techs/${techid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechs = techs.filter((tech) => tech.id != techid);

      setTechs(newTechs);

      closeModal();
      toast.success(`Tecnologia ${techtitle} excluida com sucesso`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function editTech(data, techid) {
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
      console.log(error);
    }
  }

  return (
    <TechContext.Provider
      value={{
        createTech,
        techs,
        setTechs,
        deleteTech,
        editTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
