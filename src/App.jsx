import { Routes, Route } from "react-router-dom";
import { Login } from "./assets/components/pages/login/login.jsx";
import { Home } from "./assets/components/pages/home/home.jsx";
import { Register } from "./assets/components/pages/register/register.jsx";
import { Dash } from "./assets/components/pages/dash/dash.jsx";
import { NotFound } from "./assets/components/notFound/notFound.jsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dash" element={<Dash />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
