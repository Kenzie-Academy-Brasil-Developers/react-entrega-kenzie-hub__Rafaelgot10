import { useState, useEffect } from "react";
import { Header } from "../../components/header/header.jsx";
import { api } from "../../services/api.jsx";
import { StyleViewUser } from "./styleViewUser.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function ViewUser() {
  const [user, setUser] = useState("loading");

  useEffect(() => {
    if (token == null) {
      navigate("/login");
      toast.error("Você deve estar logado para acessar essa página !!");
    }
  }, []);

  let token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const user = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(user.data);
    }
    getUser();
  });

  return (
    <StyleViewUser>
      <Header />

      {user == "loading" ? (
        <h1 className="loading">Carregando...</h1>
      ) : (
        <div className="tags__container">
          <div>
            <label>Nome</label>
            <h2>{user.name}</h2>
          </div>

          <div>
            <label>Email</label>
            <h2>{user.email}</h2>
          </div>

          <div>
            <label>Bio</label>
            <h2>{user.bio}</h2>
          </div>

          <div>
            <label>Contato</label>
            <h2>{user.contact}</h2>
          </div>

          <div>
            <label>Módulo</label>
            <h2>{user.course_module}</h2>
          </div>
        </div>
      )}
    </StyleViewUser>
  );
}
