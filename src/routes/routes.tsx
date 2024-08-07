import { Navigate, Route, Routes } from "react-router-dom";
import Students from "../pages/students/students";
import { ROUTES } from "../utils/routes";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={ROUTES.students} />} />
      <Route path={ROUTES.students} element={<Students />} />
    </Routes>
  );
}
