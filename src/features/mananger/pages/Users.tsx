import { memo, useState } from "react";
import ActionButton from "../../shared/components/ui/ActionButton";
import { ChevronDown, Shield, Truck, User, UserRoundPlus } from "lucide-react";
import SearchBar from "../components/ui/SearchBar";
import UserRow from "../components/ui/UserRow";
import Popup from "../../shared/components/Popup";
import InputField from "../../shared/components/ui/InputField";

type User = {
  name: string;
  surname: string;
  email: string;
  role: "Admin" | "media" | "driver";
};

function Users() {
  const [search, setSearch] = useState("");
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState<"all" | "media" | "Drivers">(
    "all",
  );

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
      role: "media",
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
      role: "Admin",
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
    { rolename: "Admin", icon: Shield },
    { rolename: "media", icon: User },
    { rolename: "driver", icon: Truck },
  ];

  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("driver");
  const activeRole = roles.find((r) => r.rolename === selectedRole);
  const ActiveIcon = activeRole?.icon || User;
  const changeRole = (newRole: "Admin" | "media" | "driver") => {
    setSelectedRole(newRole);
    setOpen(false);
    // call API here if needed
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
              <span className="text-xs font-semibold text-neutral-500/70">Select use role:</span><button
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
            <ActionButton label="Send invite" isDisabled={true}/>
          </div>
        </Popup>
      )}
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col space-y-1">
            <h2 className="text-2xl font-bold mt-5">Staff</h2>
            <span className="text-neutral-500/70 text-sm">
              Manage your staff and their roles
            </span>
          </div>

          <ActionButton
            label="Invite user"
            Icon={UserRoundPlus}
            onClick={() => setOpenInviteModal(!openInviteModal)}
          />
        </div>

        {/* SEARCH */}
        <div className="flex flex-row gap-3 items-center">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          {/* Status Filters */}
          {["all", "media", "Drivers"].map((status) => (
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
                : status === "media"
                  ? "Media team"
                  : "Drivers"}
            </button>
          ))}
        </div>

        {/* USERS GRID */}
        <div className="flex flex-col gap-4">
          {filteredUsers.map((user, index) => (
            <UserRow {...user} key={index} />
          ))}

          {filteredUsers.length === 0 && (
            <div className="col-span-full text-center text-sm text-neutral-500 py-10">
              No user found
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default memo(Users);
