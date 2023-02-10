import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "./headerStyled";

export function Header() {
  const navigate = useNavigate();

  function sair() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <HeaderStyled>
      <>
        <h1>Kenzie Hub</h1>
        <button onClick={() => sair()}>Sair</button>
      </>
    </HeaderStyled>
  );
}
