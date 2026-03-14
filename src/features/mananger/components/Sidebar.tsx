import { Droplets, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import type { MenuItem } from "../../layout/menuItem";
import { useCollapse } from "../../shared/context/collapse.context";
function Sidebar({ list, role }: { list: MenuItem[]; role: string }) {
  const location = useLocation();
  const { collapsed, toggleSidebar } = useCollapse();

  return (
    <aside
      className={`hidden lg:flex fixed left-0 top-0 h-screen ${
        collapsed ? "w-30" : "w-70"
      } bg-white border-r border-slate-200/60 flex-col z-40 transition-all duration-300 overflow-y-auto`}
    >
      {/* HEADER */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="h-10 w-10 rounded-xl bg-linear-to-br from-[#0f4c81] to-[#38bdf8] flex items-center justify-center shadow-lg shadow-[#0f4c81]/20">
            <Droplets className="h-5 w-5 text-white" />
          </div>

          {!collapsed && (
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-lg">
                MarkWater
              </span>
              <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                {role} dashboard
              </p>
            </div>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-slate-100"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-slate-500" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-slate-500" />
          )}
        </button>
      </div>

      {/* NAVIGATION */}

      <nav className="flex-1 px-3 mt-2 space-y-2">
        {list.map((item, _i) => {
          const isActive = location.pathname === item.url;

          return (
            <Link
              key={_i}
              to={item.url}
              className={`flex items-center ${
                collapsed ? "justify-center" : "gap-3"
              } px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#0f4c81] text-white shadow-lg shadow-[#0f4c81]/20"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />

              {!collapsed && item.name}
            </Link>
          );
        })}
      </nav>

      {/* USER */}

      <div className="p-3 border-t border-slate-100">
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600">
              YO
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 truncate">
                User
              </p>
              <p className="text-[11px] text-slate-400 truncate">
                user@user.com
              </p>
            </div>
          </div>
        )}

        <button
          className={`flex items-center ${
            collapsed ? "justify-center" : "gap-3"
          } px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 w-full transition-all`}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
