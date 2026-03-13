import { memo, useState } from "react";
import ActionButton from "../../shared/components/ui/ActionButton";
import {
  ChevronDown,
  Shield,
  Truck,
  User as User_icon,
  UserRoundPlus,
} from "lucide-react";
import SearchBar from "../../mananger/components/ui/SearchBar";
import Popup from "../../shared/components/Popup";
import InputField from "../../shared/components/ui/InputField";
import UserRow from "../../mananger/components/ui/UserRow";
import type { User } from "../../shared/models/user.type";

function UsersManagement() {
  const [search, setSearch] = useState("");
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState<
    "all" | "Admin" | "media" | "driver" | "Forman" | "normal user"
  >("all");

  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("driver");

  const users: User[] = [
    {
      name: "John",
      surname: "Doe",
      email: "john@demo.com",
      role: "Admin",
    },
    {
      name: "Peter",
      surname: "Smith",
      email: "peter@demo.com",
      role: "forman",
    },
    {
      name: "David",
      surname: "Johnson",
      email: "david@demo.com",
      role: "driver",
    },
    {
      name: "Sarah",
      surname: "Williams",
      email: "sarah@demo.com",
      role: "media",
    },
    {
      name: "Michael",
      surname: "Brown",
      email: "michael@demo.com",
      role: "normal user",
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.surname.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole = statusFilter === "all" || user.role === statusFilter;

    return matchesSearch && matchesRole;
  });

  const roles = [
    { rolename: "admin", icon: Shield },
    { rolename: "forman", icon: Shield },
    { rolename: "media", icon: User_icon },
    { rolename: "driver", icon: Truck },
    { rolename: "normal user", icon: User_icon },
  ];

  const activeRole = roles.find((r) => r.rolename === selectedRole);
  const ActiveIcon = activeRole?.icon || User_icon;

  const changeRole = (
    newRole: "Admin" | "media" | "driver" | "Forman" | "normal user",
  ) => {
    setSelectedRole(newRole);
    setOpen(false);
  };

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
            <div className="flex flex-col space-y-2 relative">
              <span className="text-xs font-semibold text-neutral-500/70">
                Select user role:
              </span>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between gap-2 px-4 w-full py-2 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-medium hover:bg-neutral-100 transition"
              >
                <ActiveIcon className="h-4 w-4 text-neutral-600" />
                {selectedRole}
                <ChevronDown className="h-4 w-4 text-neutral-500" />
              </button>

              {open && (
                <div className="absolute right-0 top-16 mt-2 w-full bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden z-50">
                  {roles.map((option, index) => {
                    const Icon = option.icon;

                    return (
                      <button
                        key={index}
                        onClick={() => changeRole(option.rolename as any)}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-neutral-100 transition"
                      >
                        <Icon className="h-4 w-4 text-neutral-600" />
                        {option.rolename}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <ActionButton label="Send invite" isDisabled={true} />
          </div>
        </Popup>
      )}

      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 mt-5">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold">User Management</h1>
            <span className="text-neutral-500/70 text-sm">
              Manage all system users, roles, and permissions
            </span>
          </div>
          <ActionButton
            label="Add User"
            Icon={UserRoundPlus}
            onClick={() => setOpenInviteModal(!openInviteModal)}
          />
        </div>

        {/* SEARCH & FILTERS */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            {["all", "Admin", "Forman", "media", "driver", "normal user"].map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status as any)}
                  className={`
            px-4 py-2 h-8 text-xs rounded-lg transition-all text-center
            ${
              statusFilter === status
                ? "bg-[#0f4c81] shadow text-white font-medium"
                : "text-neutral-500/80 bg-white/90 border border-neutral-500/20 font-semibold hover:text-black"
            }
          `}
                >
                  {status === "all"
                    ? "All"
                    : status === "Admin"
                      ? "Admins"
                      : status === "Forman"
                        ? "Managers"
                        : status === "media"
                          ? "Media"
                          : status === "normal user"
                            ? "Normal User"
                            : "Drivers"}
                </button>
              ),
            )}
          </div>
        </div>

        {/* USERS GRID */}
        <div className="flex flex-col gap-4">
          {filteredUsers.map((user, index) => (
            <UserRow {...user} key={index} />
          ))}

          {filteredUsers.length === 0 && (
            <div className="col-span-full text-center text-sm text-neutral-500 py-10">
              No users found matching your query
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default memo(UsersManagement);
