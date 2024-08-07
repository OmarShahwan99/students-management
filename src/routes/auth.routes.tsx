import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import { ROUTES } from "../utils/routes";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={ROUTES.signin} />} />
      <Route path={ROUTES.signin} element={<Login />} />
    </Routes>
  );
}
