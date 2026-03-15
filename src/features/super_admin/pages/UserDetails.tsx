import { memo, useState } from "react";
import {
  CircleOff,
  Mail,
  Building2,
  ShieldCheck,
  Calendar,
  ChevronRight,
  User as UserIcon,
} from "lucide-react";
import ActionButton from "../../shared/components/ui/ActionButton";
import image from "../../../assets/back.png";
import type { Anouncement } from "../../mananger/models/Anouncement.model";
import AnnouncementCard from "../../shared/components/ui/AnnouncementCard";
import type { User } from "../../shared/models/user.type";

function UserDetails() {
  const [user] = useState<User>({
    name: "Tshepo",
    surname: "Mokoena",
    email: "tshepo.m@municipality.gov.za",
    role: "Municipality Manager",
    department: "Infrastructure",
    municipality: "City of Johannesburg",
    status: "Active",
    phone: "+27 11 123 4567",
  });

  const announcements: Anouncement[] = [
    {
      Areas: ["Soweto", "Diepkloof"],
      sections: ["Section 1"],
      likes: 24,
      content:
        "Maintenance scheduled for water pipelines in Soweto areas this weekend. Please store water in advance.",
      date: "2026-03-12",
      announcerName: "Tshepo Mokoena",
      Initials: "TM",
      imageurl: [image],
    },
    {
      Areas: ["City Center"],
      sections: ["CBD"],
      likes: 15,
      content: "New waste management schedule implementation starting Monday.",
      date: "2026-03-10",
      announcerName: "Tshepo Mokoena",
      Initials: "TM",
    },
  ];

  return (
    <div className="flex flex-col space-y-8 pb-32">
      {/* Header / Profile Info */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-6 lg:space-y-0">
        <div className="flex flex-row space-x-6">
          <div className="relative">
            <div className="h-24 w-24 bg-[#0f4c81]/10 rounded-2xl flex items-center justify-center text-[#0f4c81] border border-[#0f4c81]/20 overflow-hidden">
              {user.profile_image ? (
                <img
                  src={user.profile_image}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <UserIcon className="size-12" />
              )}
            </div>
            <div
              className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-white h-6 w-6 rounded-full"
              title="Active"
            ></div>
          </div>
          <div className="flex flex-col justify-center space-y-1">
            <h1 className="text-2xl font-bold text-[#1e293b]">
              {user.name} {user.surname}
            </h1>
            <div className="flex items-center space-x-2 text-neutral-500 text-sm">
              <Mail className="size-3" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-0.5 bg-[#0f4c81]/10 text-[#0f4c81] text-[10px] font-bold rounded-full uppercase tracking-wider">
                {user.role}
              </span>
              <span className="text-neutral-300">|</span>
              <span className="text-xs text-neutral-500 font-medium">
                {user.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <ActionButton label="Edit Profile" />
          <ActionButton label="View Logs" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Organization & Contact */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
            <h3 className="font-bold text-[#1e293b] flex items-center gap-2">
              <Building2 className="size-4 text-[#0f4c81]" />
              Organization Details
            </h3>

            <div className="space-y-4">
              <div className="space-y-1.5 text-sm">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-tighter">
                  Municipality
                </label>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl border border-neutral-100 group hover:border-[#0f4c81]/30 transition-colors cursor-pointer">
                  <span className="font-medium text-[#334155]">
                    {user.municipality || "N/A"}
                  </span>
                  <ChevronRight className="size-4 text-neutral-400 group-hover:text-[#0f4c81]" />
                </div>
              </div>

              <div className="space-y-1.5 text-sm">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-tighter">
                  Department
                </label>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl border border-neutral-100 group hover:border-[#0f4c81]/30 transition-colors cursor-pointer">
                  <span className="font-medium text-[#334155]">
                    {user.department || "N/A"}
                  </span>
                  <ChevronRight className="size-4 text-neutral-400 group-hover:text-[#0f4c81]" />
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[10px] text-neutral-400 italic">
                  * Changing these will update the user's access permissions
                  immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
            <h3 className="font-bold text-[#1e293b] flex items-center gap-2">
              <ShieldCheck className="size-4 text-[#0f4c81]" />
              Security & Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-neutral-50">
                <span className="text-neutral-500">Phone</span>
                <span className="font-medium text-[#1e293b]">
                  {user.phone || "Not set"}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-50">
                <span className="text-neutral-500">Last Login</span>
                <span className="font-medium text-[#1e293b]">2 hours ago</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-neutral-500">Member Since</span>
                <span className="font-medium text-[#1e293b]">Jan 15, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: User Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-bold text-[#1e293b]">
              User Announcements
            </h2>
            <span className="text-xs bg-[#0f4c81] text-white px-2 py-1 rounded-md font-bold">
              {announcements.length} Published
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {announcements.length > 0 ? (
              announcements.map((announcement, index) => (
                <AnnouncementCard
                  key={index}
                  {...announcement}
                  canManage={true}
                />
              ))
            ) : (
              <div className="bg-white p-12 rounded-2xl border border-dashed border-neutral-300 flex flex-col items-center justify-center text-neutral-400">
                <Calendar className="size-12 mb-3 opacity-20" />
                <p>No announcements published by this user</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Action Buttons (Bottom Right) */}
      <div className="fixed bottom-8 right-8 flex space-x-4 z-40">
        <div className="group relative">
          <ActionButton
            label="Block User"
            Icon={CircleOff}
            color="bg-red-500 hover:bg-red-600 shadow-lg shadow-red-200 py-4 px-6 scale-110"
          />
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
            Disable account access
          </div>
        </div>

        <div className="group relative">
          <ActionButton
            label="Resend Invite"
            Icon={Mail}
            color="bg-[#0f4c81] hover:bg-[#0f4c81]/90 shadow-lg shadow-blue-200 py-4 px-6 scale-110"
          />
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
            Resend Invite email
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(UserDetails);
