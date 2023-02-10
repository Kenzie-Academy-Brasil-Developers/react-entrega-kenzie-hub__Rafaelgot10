import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/login/login";
import { Home } from "../pages/home/home.jsx";
import { Register } from "../pages/register/register.jsx";
import { Dash } from "../pages/dash/dash.jsx";
import { NotFound } from "../pages/notFound/notFound.jsx";
import { CreateTech } from "../components/createTech/createTech";
import { EditTech } from "../components/editTech/editTech";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dash" element={<Dash />}>
        <Route path="/dash/techs" element={<CreateTech />} />
        <Route path="/dash/tech/:techtitle/:techid" element={<EditTech />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
