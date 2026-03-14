import { ChevronDown, Shield, Truck, User } from "lucide-react";
import { memo, useState } from "react";

type UserRowProps = {
  name: string;
  surname: string;
  email: string;
  role: string;
};

function UserRow({ name, surname, email, role }: UserRowProps) {
  const initials = `${name[0]}${surname[0]}`.toUpperCase();
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(role);

  const roles = [
    { rolename: "Admin", icon: Shield },
    { rolename: "Forman", icon: Shield },
    { rolename: "media", icon: User },
    { rolename: "driver", icon: Truck },
    { rolename: "normal user", icon: User },
  ];

  const activeRole = roles.find((r) => r.rolename === selectedRole);
  const ActiveIcon = activeRole?.icon || User;

  const changeRole = (
    newRole: "Admin" | "media" | "driver" | "forman" | "normal user",
  ) => {
    setSelectedRole(newRole);
    setOpen(false);

    // call API here if needed
  };

  return (
    <div className="flex items-center justify-between bg-white border border-neutral-200 rounded-2xl px-5 py-3 shadow-sm relative">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center font-semibold text-neutral-700">
          {initials}
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-neutral-900">
            {name} {surname}
          </span>
          <span className="text-xs text-neutral-500">{email}</span>
        </div>
      </div>

      {/* ROLE DROPDOWN */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-medium hover:bg-neutral-100 transition"
        >
          <ActiveIcon className="h-4 w-4 text-neutral-600" />
          {selectedRole}
          <ChevronDown className="h-4 w-4 text-neutral-500" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden z-50">
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
    </div>
  );
}

export default memo(UserRow);
