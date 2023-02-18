import * as yup from "yup";

export const userFormSchema = yup.object().shape({
  name: yup.string(),
  old_password: yup.string().required("Senha atual obrigatória"),

  password: yup.string(),
  // .required("Senha obrigatório")
  // .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
  bio: yup.string(),
  contact: yup.string(),
  course_module: yup.string(),
});
