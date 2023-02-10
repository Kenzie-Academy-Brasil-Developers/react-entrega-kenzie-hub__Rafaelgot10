import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { api } from "../../services/api.jsx";
import { StyleDash } from "./styleDash";
import { SiAddthis } from "react-icons/si";

export function Dash() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [techs, setTechs] = useState([]);

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token == null) {
      navigate("/register");
    }
  }, []);

  useEffect(() => {
    async function getUser() {
      const user = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(user.data);
      setTechs(user.data.techs);
    }
    getUser();
  }, [techs]);

  function newTech() {
    navigate("/dash/techs");
  }

  function editTech(title, id) {
    navigate(`/dash/tech/${title}/${id}`);
  }

  return (
    <StyleDash>
      <Outlet />;
      <Header />
      <div className="welcome">
        <p>Olá, {user.name}</p>
        <span>{user.course_module}</span>
      </div>
      <div className="techs">
        <div>
          <h2>Tecnologias</h2>
          <SiAddthis onClick={() => newTech()} />
        </div>
        <div className="techs__list">
          {user ? (
            user.techs.length == 0 ? (
              <>
                <div className="tech__empty">
                  <h1>Você ainda não cadastrou nenhuma tecnologia</h1>
                </div>
              </>
            ) : (
              <>
                <ul>
                  {user.techs.map((tech) => (
                    <li
                      onClick={() => editTech(tech.title, tech.id)}
                      key={tech.id}
                    >
                      <p>{tech.title}</p>
                      <span>{tech.status}</span>
                    </li>
                  ))}
                </ul>
              </>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </StyleDash>
  );
}
