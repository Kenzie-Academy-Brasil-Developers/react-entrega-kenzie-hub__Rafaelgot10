import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { api } from "../../services/api.jsx";
import { StyleDash } from "./styleDash";
import { SiAddthis } from "react-icons/si";
import { useContext } from "react";
import { UserContext } from "../../provider/userContext.jsx";
import { TechContext } from "../../provider/techContext.jsx";
import { WorkContext } from "../../provider/workContext.jsx";
import { toast } from "react-toastify";

export function Dash() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const { techs, setTechs } = useContext(TechContext);
  const { works, setWorks } = useContext(WorkContext);

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token == null) {
      navigate("/");

      toast.error("Você deve estar logado para acessar essa página !!");
    } else {
      async function getUser() {
        const userLogged = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.setItem("user", JSON.stringify(userLogged.data));
        setUser(userLogged.data);
        setTechs(userLogged.data.techs);
        setWorks(userLogged.data.works);
      }
      getUser();
    }
  }, []);

  function newTech() {
    navigate("/dash/createTech");
  }

  function newWork() {
    navigate("/dash/createWork");
  }

  function editTech(title, id) {
    navigate(`/dash/tech/${title}/${id}`);
  }

  function viewWork(id) {
    navigate(`/dash/work/${id}`);
  }

  return (
    <StyleDash>
      <Outlet />
      <Header />

      {user == "loading" ? (
        <h1 className="loading">Carregando...</h1>
      ) : (
        <>
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
              {techs.length == 0 ? (
                <>
                  <div className="tech__empty">
                    <h1>Você ainda não cadastrou nenhuma tecnologia</h1>
                  </div>
                </>
              ) : (
                <ul>
                  {techs.map((tech) => (
                    <li
                      onClick={() => editTech(tech.title, tech.id)}
                      key={tech.id}
                    >
                      <p>{tech.title}</p>
                      <span>{tech.status}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="works">
            <div>
              <h2>Projetos </h2>
              <SiAddthis onClick={() => newWork()} />
            </div>

            <div className="works__list">
              {works.length == 0 ? (
                <>
                  <div className="work__empty">
                    <h1>Você ainda não cadastrou nenhum Projetos</h1>
                  </div>
                </>
              ) : (
                <ul>
                  {works.map((work) => (
                    <li onClick={() => viewWork(work.id)} key={work.id}>
                      <p>{work.title}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </StyleDash>
  );
}
