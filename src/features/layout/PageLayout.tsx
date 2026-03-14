import {
  ChartArea,
  FileCheck,
  HandPlatter,
  Home,
  LayoutPanelLeft,
  MapPin,
  Megaphone,
  Truck,
  User,
  Settings,
  Activity,
  Users,
  Workflow,
  HousePlus,
} from "lucide-react";
import type { MenuItem } from "./menuItem";
import { useLocation } from "react-router-dom";
import {
  SUPER_ADMIN_DASHBOARD,
  SUPER_ADMIN_USERS,
  SUPER_ADMIN_ANNOUNCEMENTS,
  SUPER_ADMIN_PROFILE,
  SUPER_ADMIN_SETTINGS,
  SUPER_ADMIN_LOGS,
  SUPER_ADMIN_ANALYTICS,
  SUPER_ADMIN_AREAS,
  SUPER_ADMIN_DEPARTMENT,
  SUPER_ADMIN_MUNICIPALITY,
} from "../super_admin/consts/routes.super_admin";
import {
  MANANGER_ANALYTICS,
  MANANGER_ANNOUNCEMENTS,
  MANANGER_AREAS,
  MANANGER_DASHBOARD,
  MANANGER_DRIVERS,
  MANANGER_PROFILE,
  MANANGER_TRIPTRACKING,
  MANANGER_USERS,
} from "../mananger/consts/route.mananger";
import { Outlet } from "react-router-dom";
import Sidebar from "../mananger/components/Sidebar";
import {
  MEDIA_ANNOUNCEMENTS,
  MEDIA_HOME,
  MEDIA_PROFILE,
  MEDIA_SECTION,
  MEDIA_SERVICES,
} from "../media/const/routes.media";
import { useCollapse } from "../shared/context/collapse.context";

function PageLayout() {
  const location = useLocation();
  const mediaTeamNav: MenuItem[] = [
    {
      name: "Home",
      icon: Home,
      url: MEDIA_HOME,
    },
    {
      name: "Announcements",
      icon: Megaphone,
      url: MEDIA_ANNOUNCEMENTS,
    },
    {
      name: "Sections",
      icon: MapPin,
      url: MEDIA_SECTION,
    },
    {
      name: "Services",
      icon: HandPlatter,
      url: MEDIA_SERVICES,
    },
    {
      name: "Profile",
      icon: Megaphone,
      url: MEDIA_PROFILE,
    },
  ];
  const formanNav: MenuItem[] = [
    {
      name: "Dashboard",
      icon: LayoutPanelLeft,
      url: MANANGER_DASHBOARD,
    },
    {
      name: "Annoumcements",
      icon: Megaphone,
      url: MANANGER_ANNOUNCEMENTS,
    },
    {
      name: "Drivers",
      icon: Truck,
      url: MANANGER_DRIVERS,
    },

    {
      name: "Trip Tracking",
      icon: FileCheck,
      url: MANANGER_TRIPTRACKING,
    },
    {
      name: "Areas",
      icon: MapPin,
      url: MANANGER_AREAS,
    },
    {
      name: "Users",
      icon: LayoutPanelLeft,
      url: MANANGER_USERS,
    },
    {
      name: "Analytics",
      icon: ChartArea,
      url: MANANGER_ANALYTICS,
    },
    {
      name: "Profile",
      icon: User,
      url: MANANGER_PROFILE,
    },
  ];
  const superAdminNav: MenuItem[] = [
    {
      name: "Dashboard",
      icon: LayoutPanelLeft,
      url: SUPER_ADMIN_DASHBOARD,
    },
    {
      name: "Users",
      icon: Users,
      url: SUPER_ADMIN_USERS,
    },
    {
      name: "Announcements",
      icon: Megaphone,
      url: SUPER_ADMIN_ANNOUNCEMENTS,
    },
    {
      name: "Departments",
      icon: Workflow,
      url: SUPER_ADMIN_DEPARTMENT,
    },
    {
      name: "Municipalities",
      icon: HousePlus,
      url: SUPER_ADMIN_MUNICIPALITY,
    },
    {
      name: "Areas",
      icon: MapPin,
      url: SUPER_ADMIN_AREAS,
    },
    {
      name: "Profile",
      icon: User,
      url: SUPER_ADMIN_PROFILE,
    },
    {
      name: "Settings",
      icon: Settings,
      url: SUPER_ADMIN_SETTINGS,
    },
    {
      name: "Logs",
      icon: Activity,
      url: SUPER_ADMIN_LOGS,
    },
    {
      name: "Analytics",
      icon: ChartArea,
      url: SUPER_ADMIN_ANALYTICS,
    },
  ];

  const { collapsed } = useCollapse();

  // Determine which navigation list and role to use based on the current path
  let currentNav = formanNav;
  let currentRole = "super_admin";

  if (location.pathname.startsWith("/admin")) {
    currentNav = superAdminNav;
    currentRole = "super_admin";
  } else if (location.pathname.startsWith("/media")) {
    currentNav = mediaTeamNav;
    currentRole = "media_team";
  } else if (location.pathname.startsWith("/forman")) {
    currentNav = formanNav;
    currentRole = "forman";
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc]">
      {/* Sidebar */}
      <Sidebar list={currentNav} role={currentRole} />
      {/* Main Content Area */}
      <main
        className={`${!collapsed ? "ml-70" : "ml-30"}  lg:px-10 flex-1 overflow-y-auto space-y-3 pt-10 pb-10`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default PageLayout;
