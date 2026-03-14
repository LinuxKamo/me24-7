import { memo, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import ActionButton from "../shared/components/ui/ActionButton";
import { Plus, Users, Building2, Layers } from "lucide-react";
import InputField from "../shared/components/ui/InputField";
import Popup from "../shared/components/Popup";
import {
  SUPER_ADMIN_USERS,
  SUPER_ADMIN_USERS_DEPARTMENT,
  SUPER_ADMIN_USERS_MUNICIPALITY,
} from "../super_admin/consts/routes.super_admin";

function UsersManagement() {
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const tabs = [
    {
      name: "All",
      path: SUPER_ADMIN_USERS,
      icon: Layers,
    },
    {
      name: "Departments",
      path: SUPER_ADMIN_USERS_DEPARTMENT,
      icon: Building2,
    },
    {
      name: "Municipalities",
      path: SUPER_ADMIN_USERS_MUNICIPALITY,
      icon: Users,
    },
  ];

  return (
    <>
      {openInviteModal && (
        <Popup
          isOpen={openInviteModal}
          onClose={() => setOpenInviteModal(!openInviteModal)}
        >
          <div className="min-h-60 flex flex-col space-y-4 justify-center">
            <h1 className="text-2xl font-semibold">Invite a user</h1>
            <InputField label="Email Address" placeholder="user@example.com" />
            <ActionButton label="Send invite" isDisabled={true} />
          </div>
        </Popup>
      )}

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold mt-5">Municipalities</h1>
          <span className="text-neutral-500/70 text-sm">
            Overview of All municipalities
          </span>
        </div>

        <ActionButton
          label="Invite User"
          Icon={Plus}
          onClick={() => setOpenInviteModal(!openInviteModal)}
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <NavLink
              key={tab.name}
              to={tab.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-[#0f4c81] text-white"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`
              }
            >
              <Icon size={16} />
              {tab.name}
            </NavLink>
          );
        })}
      </div>

      <main className="mt-4">
        <Outlet />
      </main>
    </>
  );
}

export default memo(UsersManagement);
