import * as yup from "yup";

export const userFormSchema = yup.object().shape({
  name: yup.string(),
  old_password: yup.string().required("Senha atual obrigatória"),
  password: yup.string(),
  bio: yup.string(),
  contact: yup.string(),
  course_module: yup.string(),
});
