import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const WorkContext = createContext({});

export const WorkProvider = ({ children }) => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const [works, setWorks] = useState([]);

  function closeModal() {
    navigate("/dash");
  }

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

  async function deleteWork(workid, worktitle) {
    try {
      const response = await api.delete(`/users/works/${workid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      closeModal();
      toast.success(`Projeto ${worktitle} excluido com sucesso`);

      const newWorks = works.filter((work) => work.id != workid);

      setWorks(newWorks);
    } catch (error) {}
  }

  async function editWork(data, workid) {
    try {
      const response = await api.put(`/users/works/${workid}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      closeModal();

      const newWorks = works.map((work) => {
        if (work.id == workid) {
          return response.data;
        } else {
          return work;
        }
      });

      setWorks(newWorks);
      toast.success(`Projeto ${response.data.title} editado com sucesso`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <WorkContext.Provider
      value={{
        createWork,
        works,
        setWorks,
        deleteWork,
        editWork,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
};
