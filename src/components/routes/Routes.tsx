import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import RightsPage from "../pages/RightsPage";

const AppRoutes = () => (
  <BrowserRouter basename="/vertice-landing-page">
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />}/>
      <Route path="/rights" element={<RightsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

