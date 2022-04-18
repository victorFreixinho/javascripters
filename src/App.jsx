import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import UserList from "./components/users/UserList";
import SignUp from "./pages/SignUp";
import OMForm from "./pages/OMForm";
import DoencaForm from "./pages/DoencaForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
      // Routes documentation in: https://reactrouter.com/docs/en/v6/getting-started/overview
      <Routes>
        <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="users" element={<UserList />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="admin-om" element={<OMForm />}></Route>
            <Route path="admin-doenca" element={<DoencaForm />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
