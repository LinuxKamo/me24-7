import type { User } from "../../shared/models/user.type";
import { useState } from "react";
import SearchBar from "../../mananger/components/ui/SearchBar";
import Table from "../../shared/components/Table";

function AllUsers() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "Admin" | "media" | "driver" | "Forman" | "normal user"
  >("all");

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

  return (
    <>
      <div className="space-y-6">
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
          <Table
            heading="All users"
            tableHeadings={["", "Usernames", "Email", "Role", "Actions"]}
            row={filteredUsers.map((user) => (
              <tr className="h-10" key={user.email}>
                <td></td>
                <td className="pl-4 space-x-2">
                  {user.name} {user.surname}
                </td>
                <td className="pl-4">{user.email}</td>
                <td className="pl-4">{user.role}</td>
                <td className="pl-4">
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          />
        </div>
      </div>
    </>
  );
}

export default AllUsers;
