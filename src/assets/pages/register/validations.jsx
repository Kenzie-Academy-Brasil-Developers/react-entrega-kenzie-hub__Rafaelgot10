import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("email invalido"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  bio: yup.string().required("Bio obrigatório"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Módulo obrigatório"),
});
