import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [avatar, setAvatar] = useState(null);
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
