import { Route } from "react-router-dom";
import {
  SUPER_ADMIN_USERS,
  SUPER_ADMIN_ANNOUNCEMENTS,
  SUPER_ADMIN_PROFILE,
  SUPER_ADMIN_LOGS,
  SUPER_ADMIN_ANALYTICS,
  SUPER_ADMIN_AREAS,
  SUPER_ADMIN_MUNICIPALITY,
  SUPER_ADMIN_MUNICIPALITY_DETAILS,
  SUPER_ADMIN_DEPARTMENT,
  SUPER_ADMIN_USER_INVITE,
  SUPER_ADMIN_USER_DETAILS,
  SUPER_ADMIN_USERS_DEPARTMENT,
  SUPER_ADMIN_USERS_MUNICIPALITY,
  SUPER_ADMIN_NOTIFICATIONS,
} from "../consts/routes.super_admin";
import PageLayout from "../../layout/PageLayout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Logs from "../pages/Logs";
import Analytics from "../pages/Analytics";
import Announcements from "../../shared/pages/Announcements";
import Areas from "../pages/Areas";
import MunicipalityDetails from "../pages/MunicipalityDetails";
import Department from "../pages/Department";
import Invite from "../pages/Invite";
import UserDetails from "../pages/UserDetails";
import AllUsers from "../pages/AllUsers";
import DepartmentUsers from "../pages/DepartmentUsers";
import MunicipalityUsers from "../pages/MunicipalityUsers";
import UsersManagement from "../pages/UsersManagement";
import MunicipalityPage from "../pages/Municipality";
import Notifications from "../../shared/pages/Notifications";

export const SuperAdminRoutes = () => {
  return (
    <Route path={"/admin"} element={<PageLayout />}>
      <Route index element={<Dashboard />} />
      <Route path={SUPER_ADMIN_USERS} element={<UsersManagement />}>
        <Route index element={<AllUsers />} />
        <Route
          path={SUPER_ADMIN_USERS_DEPARTMENT}
          element={<DepartmentUsers />}
        />
        <Route
          path={SUPER_ADMIN_USERS_MUNICIPALITY}
          element={<MunicipalityUsers />}
        />
      </Route>
      <Route path={SUPER_ADMIN_ANNOUNCEMENTS} element={<Announcements />} />
      <Route path={SUPER_ADMIN_PROFILE} element={<Profile />} />
      {/* <Route path={SUPER_ADMIN_SETTINGS} element={<Settings />} /> */}
      <Route path={SUPER_ADMIN_LOGS} element={<Logs />} />
      <Route path={SUPER_ADMIN_ANALYTICS} element={<Analytics />} />
      <Route path={SUPER_ADMIN_AREAS} element={<Areas />} />
      <Route path={SUPER_ADMIN_DEPARTMENT} element={<Department />} />
      <Route path={SUPER_ADMIN_MUNICIPALITY} element={<MunicipalityPage />} />
      <Route
        path={SUPER_ADMIN_MUNICIPALITY_DETAILS}
        element={<MunicipalityDetails />}
      />
      <Route path={SUPER_ADMIN_USER_INVITE} element={<Invite />} />
      <Route path={SUPER_ADMIN_USER_DETAILS} element={<UserDetails />} />
      <Route path={SUPER_ADMIN_NOTIFICATIONS} element={<Notifications />} />
    </Route>
  );
};
