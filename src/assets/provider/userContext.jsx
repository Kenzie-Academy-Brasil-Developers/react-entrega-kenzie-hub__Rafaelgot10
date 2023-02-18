import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const imgProfile = localStorage.getItem("imgProfile");
  console.log(imgProfile);
  const [avatar, setAvatar] = useState(imgProfile);
  const [works, setWorks] = useState([]);
  const [techs, setTechs] = useState([]);
  const [user, setUser] = useState("loading");

  return (
    <UserContext.Provider
      value={{
        avatar,
        setAvatar,
        techs,
        setTechs,
        works,
        setWorks,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
