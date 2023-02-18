import { Header } from "../../components/header/header";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/api.jsx";
import { userFormSchema } from "./validations.jsx";
import { toast } from "react-toastify";
import { UserStyled } from "./styleEditUser";
import { UserContext } from "../../provider/userContext";
import { useContext } from "react";

export function EditUser() {
  let user = JSON.parse(localStorage.getItem("user"));
  let token = localStorage.getItem("token");
  const { setAvatar } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token == null) {
      navigate("/login");

      toast.error("Você deve estar logado para acessar essa página !!");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      bio: user.bio,
      contact: user.contact,
      course_module: user.course_module,
    },
    mode: "onBlur",
    resolver: yupResolver(userFormSchema),
  });

  const onSubmitFunction = (data) => {
    updateUser(data);
  };

  function deleteAvatar() {
    localStorage.removeItem("imgProfile");
    setAvatar(null);
    toast.success("Avatar Excluido com sucesso");
  }

  function handleAvatar(e) {
    const url = URL.createObjectURL(e.target.files[0]);
    localStorage.setItem("imgProfile", url);
    setAvatar(url);
    toast.success("Avatar Editado com sucesso");
  }

  async function updateUser(data) {
    try {
      const response = await api.put("/profile ", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Usuário Editado com sucesso");

      localStorage.setItem("user", JSON.stringify(response.data));

      navigate("/dash/user");
    } catch (error) {
      if (error.response.data.message == "Old password does not match.") {
        toast.error("Senha anterior incorreta");
      } else {
        toast.error(error.response.data.message);
      }
    }
  }

  return (
    <UserStyled>
      <Header />

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Edição de usuario </h2>

        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>

        <div>
          <label htmlFor="old_password">Senha atual</label>
          <input
            id="old_password"
            type="password"
            placeholder="Digite aqui sua Senha antiga"
            {...register("old_password")}
          />
          <span>{errors.old_password?.message}</span>
        </div>

        <div>
          <label htmlFor="password">Nova Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite aqui sua Senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <input
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>
        </div>

        <div>
          <label htmlFor="contact">Contato</label>
          <input
            id="contact"
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>
        </div>

        <div>
          <label htmlFor="modulo">Selecionar módulo</label>
          <select id="modulo" {...register("course_module")}>
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Introdução ao Backend)</option>
            <option>Quarto módulo (Backend Avançado)</option>
          </select>
          <span>{errors.course_module?.message}</span>
        </div>

        <div>
          <label htmlFor="avatar">Editar Avatar</label>
          <div>
            <input onChange={(e) => handleAvatar(e)} id="avatar" type="file" />

            <button type="button" onClick={() => deleteAvatar()}>
              Excluir avatar
            </button>
          </div>
        </div>

        <button type="submit">Salvar alterações</button>
      </form>
    </UserStyled>
  );
}
