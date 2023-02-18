import { useNavigate } from "react-router-dom";
import { StyleHeader } from "./styledHeader";
import { BiUserCircle } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../provider/userContext";

export function Header() {
  const navigate = useNavigate();

  const { setTechs, setWorks, setUser, avatar, setAvatar } =
    useContext(UserContext);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("user");
    localStorage.removeItem("imgProfile");
    setAvatar(null);
    setUser("loading");
    setWorks([]);
    setTechs([]);
    navigate("/login");
  }

  function editUser() {
    navigate("/dash/editUser");
  }

  function viewUser() {
    navigate("/dash/user");
  }

  function returnDash() {
    navigate("/dash");
  }

  return (
    <StyleHeader>
      <h1>Kenzie Hub</h1>

      <div className="nav__dash" onClick={() => returnDash()}>
        <h3>Dashboard</h3>
      </div>

      <div className="nav__view" onClick={() => viewUser()}>
        <h3>Ver Perfil</h3>
      </div>

      <div className="nav__edit" onClick={() => editUser()}>
        <h3>Editar Perfil</h3>
      </div>

      {avatar == null ? (
        <div className="user__avatar">
          <BiUserCircle />
          <div>
            <h3 onClick={() => logout()}>Sair</h3>
          </div>
        </div>
      ) : (
        <div className="user__avatar">
          <img src={avatar} alt="" />
          <div>
            <h3 onClick={() => logout()}>Sair</h3>
          </div>
        </div>
      )}
    </StyleHeader>
  );
}
