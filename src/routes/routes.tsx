import { Navigate, Route, Routes } from "react-router-dom";
import Students from "../pages/students/students";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/students" />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  );
}
