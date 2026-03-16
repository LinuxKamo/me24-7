import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ManangerRoutes } from "./features/mananger/routes/ManangerRoutes";
import { MediaRoutes } from "./features/media/routes/MediaRoutes";
import { SuperAdminRoutes } from "./features/super_admin/routes/SuperAdminRoutes";
import { AuthRoutes } from "./features/auth/routes/AuthRoutes";
import SignIn from "./features/auth/pages/SignIn";

import { RoleSelectionProvider } from "./features/shared/context/roleselection.context";

function App() {
  return (
    <RoleSelectionProvider>
      <BrowserRouter>
        <Routes>
          {/* Place holder for now */}
          <Route path="/" element={<SignIn />} />
          {ManangerRoutes()}
          {MediaRoutes()}
          {SuperAdminRoutes()}
          {AuthRoutes()}
        </Routes>
      </BrowserRouter>
    </RoleSelectionProvider>
  );
}
export default App;
