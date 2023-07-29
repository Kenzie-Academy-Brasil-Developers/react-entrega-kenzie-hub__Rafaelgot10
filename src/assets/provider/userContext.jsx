import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const imgProfile = localStorage.getItem("imgProfile");

  const [avatar, setAvatar] = useState(imgProfile);

  const [user, setUser] = useState("loading");

  async function loginUser(data) {
    try {
      const response = await api.post("/sessions  ", data);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user.id);

        navigate("/dash");
      }
    } catch (error) {
      toast.error("Essa senha não combina com esse email rapaz!!");
      console.error(error);
    }
  }

  async function createUser(data) {
    try {
      const response = await api.post("/users ", data);
      toast.success("Usuário cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response.data.message == "Email already exists") {
        toast.error("Email já cadastrado meu bom, tenta outro ai!!");
      } else {
        toast.error(error.response.data.message);
      }
    }
  }

  return (
    <UserContext.Provider
      value={{
        avatar,
        setAvatar,
        user,
        setUser,
        loginUser,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
