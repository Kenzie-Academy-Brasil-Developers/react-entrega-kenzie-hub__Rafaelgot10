import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Home } from "../pages/home/home.jsx";
import { Register } from "../pages/register/register.jsx";
import { Dash } from "../pages/dash/dash.jsx";
import { NotFound } from "../pages/notFound/notFound.jsx";
import { CreateTech } from "../components/createTech/createTech";
import { EditTech } from "../components/editTech/editTech";
import { UserProvider } from "../provider/userContext.jsx";
import { EditUser } from "../pages/editUser/editUser";
import { ViewUser } from "../pages/viewUser/viewUser";
import { CreateWork } from "../components/createWork/createWork";
import { EditWork } from "../components/editWork/editWork.jsx";
import { ViewWork } from "../components/viewWork/viewWork";
import { TechProvider } from "../provider/techContext";
import { WorkProvider } from "../provider/workContext";

export function AppRoutes() {
  return (
    <UserProvider>
      <TechProvider>
        <WorkProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dash" element={<Dash />}>
              <Route path="/dash/createTech" element={<CreateTech />} />
              <Route path="/dash/createWork" element={<CreateWork />} />
              <Route
                path="/dash/tech/:techtitle/:techid"
                element={<EditTech />}
              />
              <Route
                path="/dash/work/:worktitle/:workid"
                element={<EditWork />}
              />
              <Route path="/dash/work/:workid" element={<ViewWork />} />
            </Route>

            <Route path="/dash/editUser" element={<EditUser />} />
            <Route path="/dash/user" element={<ViewUser />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </WorkProvider>
      </TechProvider>
    </UserProvider>
  );
}
