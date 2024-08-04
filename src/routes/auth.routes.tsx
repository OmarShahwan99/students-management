import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
