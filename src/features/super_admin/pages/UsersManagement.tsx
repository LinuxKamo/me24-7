import { memo, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import ActionButton from "../../shared/components/ui/ActionButton";
import { Plus, Users, Layers } from "lucide-react";
import InputField from "../../shared/components/ui/InputField";
import Popup from "../../shared/components/Popup";
import InputFieldDropDown from "../../mananger/components/ui/InputFieldDropDown";
import {
  SUPER_ADMIN_USERS,
  SUPER_ADMIN_USERS_MUNICIPALITY,
} from "../consts/routes.super_admin";

function UsersManagement() {
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("user");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [municipalityInput, setMunicipalityInput] = useState<string>(""); // input text
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>(""); // final selection

  // Demo lists
  const departments = ["Water", "Road", "Waste", "Power"];
  const municipalities = ["Johannesburg", "Cape Town", "Durban", "Pretoria"];

  // Filtered municipalities based on typed input
  const filteredMunicipalities = municipalities.filter((mun) =>
    mun.toLowerCase().includes(municipalityInput.toLowerCase()),
  );

  const tabs = [
    { name: "All", path: SUPER_ADMIN_USERS, icon: Layers },
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
          onClose={() => setOpenInviteModal(false)}
        >
          <div className="min-h-60 flex flex-col space-y-4 justify-center">
            <h1 className="text-2xl font-semibold">Invite a user</h1>

            <InputField label="Name" placeholder="First Name" />
            <InputField label="Last Name" placeholder="Last Name" />
            <InputField label="Email Address" placeholder="user@example.com" />

            <InputFieldDropDown
              label="Role"
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
                { label: "Manager", value: "manager" },
              ]}
              value={selectedRole}
              onChange={(val) => setSelectedRole(val)}
            />

            {selectedRole === "manager" && (
              <>
                {/* Department Dropdown */}
                <InputFieldDropDown
                  label="Department"
                  options={departments.map((dept) => ({
                    label: dept,
                    value: dept,
                  }))}
                  value={selectedDepartment}
                  onChange={(val) => setSelectedDepartment(val)}
                />

                {/* Municipality Typeahead */}
                <div className="flex flex-col relative">
                  {/* Municipality Typeahead */}
                  <div className="flex flex-col relative">
                    <InputField
                      label="Municipality"
                      placeholder="Type municipality"
                      value={municipalityInput}
                      onChange={(val) => {
                        setMunicipalityInput(val);
                        setSelectedMunicipality(""); // reset selection while typing
                      }}
                    />

                    {/* Show suggestions only if no municipality is selected */}
                    {municipalityInput &&
                      !selectedMunicipality &&
                      filteredMunicipalities.length > 0 && (
                        <ul className="absolute z-10 bg-white border border-gray-300 w-full max-h-40 overflow-auto rounded-md shadow-md mt-1">
                          {filteredMunicipalities.map((mun) => (
                            <li
                              key={mun}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setMunicipalityInput(mun); // fill input
                                setSelectedMunicipality(mun); // mark selection
                              }}
                            >
                              {mun}
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                </div>
              </>
            )}

            <ActionButton label="Send invite" isDisabled={false} />
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
          onClick={() => setOpenInviteModal(true)}
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
