import { Navigate, Route, Routes } from "react-router-dom";
import { Page1 } from "./pages/Page1";

export function SimulationRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="page1" replace />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="*" element={<Navigate to="page1" replace />} />
    </Routes>
  );
}
