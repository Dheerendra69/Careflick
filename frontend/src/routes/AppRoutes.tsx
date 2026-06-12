import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import UsersPage from "../pages/UsersPage";
import CareFormsPage from "../pages/CareFormsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/users"
          element={<UsersPage />}
        />

        <Route
          path="/care-forms"
          element={<CareFormsPage />}
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/users"
              replace
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;