import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ManangerRoutes } from "./features/mananger/routes/ManangerRoutes";
import Dashboard from "./features/mananger/pages/Dashboard";
import { MediaRoutes } from "./features/media/routes/MediaRoutes";
import { SuperAdminRoutes } from "./features/super_admin/routes/SuperAdminRoutes";
import { AuthRoutes } from "./features/auth/routes/AuthRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Place holder for now */}
        <Route path="/" element={<Dashboard />} />
        {ManangerRoutes()}
        {MediaRoutes()}
        {SuperAdminRoutes()}
        {AuthRoutes()}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
