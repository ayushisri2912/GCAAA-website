
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";

function AppRoutes() {
  return (
    <Routes>
     <Route element={<MainLayout />}>
     <Route path="/" element={<HomePage/>} />
     <Route path="/register" element={<RegisterPage/>} />
     </Route>
    </Routes>
  );
}

export default AppRoutes;
