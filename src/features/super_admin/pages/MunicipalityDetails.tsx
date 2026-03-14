import { useState } from "react";
import type { Municipality } from "../models/Municipality.model";
import { BookOpen, CircleOff, Pencil, Trash } from "lucide-react";
import ActionButton from "../../shared/components/ui/ActionButton";
import type { User } from "../../shared/models/user.type";
import image from "../../../assets/back.png";
import type { Anouncement } from "../../mananger/models/Anouncement.model";
import AnnouncementCard from "../../shared/components/ui/AnnouncementCard";

function MunicipalityDetails() {
  const announcements: Anouncement[] = [
    {
      Areas: [
        "Mailula",
        "Mabopane",
        "Soshanguve",
        "Garankuwa",
        "Pretoria",
        "Mabopane",
        "Soshanguve",
        "Garankuwa",
        "Pretoria",
      ],
      sections: ["Section 1", "Section 2"],
      likes: 12,
      content: "This is an announcement for Mailula area.",
      date: "2026-03-04",
      announcerName: "John Doe",
      Initials: "JD",
      imageurl: [image],
    },
    {
      Areas: ["Mailula"],
      sections: ["Section 1", "Section 2"],
      likes: 12,
      content: "This is an announcement for Mailula area.",
      date: "2026-02-17",
      announcerName: "John Doe",
      Initials: "JD",
      imageurl: [image],
    },
    {
      Areas: ["Mailula"],
      sections: ["Section 1", "Section 2"],
      likes: 12,
      content: "This is an announcement for Mailula area.",
      date: "2026-02-18",
      announcerName: "John Doe",
      Initials: "JD",
      imageurl: [image, image, image, image],
    },
    {
      Areas: ["Mailula"],
      sections: ["Section 1", "Section 2"],
      likes: 12,
      content: "This is an announcement for Mailula area.",
      date: "2026-02-19",
      announcerName: "John Doe",
      Initials: "JD",
    },
    {
      Areas: ["Mailula"],
      sections: ["Section 1", "Section 2"],
      likes: 12,
      content: "This is an announcement for Mailula area.",
      date: "2026-02-20",
      announcerName: "John Doe",
      Initials: "JD",
      imageurl: [image],
    },
  ];
  const [municipality] = useState<Municipality>({
    _id: "1",
    name: "Voloorus",
    address: {
      street: "something",
      suburb: "some",
      province: "some",
      postalCode: "some",
      town: "some",
    },
  });
  const [users] = useState<User[]>([
    {
      name: "John",
      surname: "Doe",
      email: "[EMAIL_ADDRESS]",
      role: "Admin",
    },
    {
      name: "Kamohelo",
      surname: "Motaung",
      email: "[EMAIL_ADDRESS]",
      role: "media",
    },
    {
      name: "Kamohelo",
      surname: "Motaung",
      email: "[EMAIL_ADDRESS]",
      role: "media",
    },
    {
      name: "Kamohelo",
      surname: "Motaung",
      email: "[EMAIL_ADDRESS]",
      role: "media",
    },
    {
      name: "Kamohelo",
      surname: "Motaung",
      email: "[EMAIL_ADDRESS]",
      role: "media",
    },
  ]);
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-5">
          <img
            src={image}
            alt="Municipality picture"
            className="h-40 w-40 rounded-lg"
          />
          <div className="flex flex-col space-y-3 items-start justify-center">
            <span className="text-xl font-semibold">{municipality.name}</span>
            <span className="text-sm text-neutral-500">
              {municipality.address.town}
            </span>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <ActionButton label="Edit" color="bg-[#0f4c81]" Icon={Pencil} />
          <ActionButton label="Delete" color="bg-red-500" Icon={Trash} />
          <ActionButton
            label="Block"
            color="bg-[#0f4c81]/80"
            Icon={CircleOff}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold mt-5">Departments</h1>
          <span className="text-neutral-500/70 text-sm">
            Overview of all {municipality.name.toLocaleLowerCase()} departments
            and their mananger
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 border border-gray-500/20 p-5 rounded-lg bg-white">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div
              className="flex flex-row justify-between items-center p-4 hover:bg-neutral-500/20 rounded-lg"
              key={index}
            >
              <div className="flex flex-row space-x-2">
                <div className="h-10 w-10 bg-neutral-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xs text-neutral-500">
                    {user.name[0]}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>{user.name}</span>
                  <span className="text-xs text-neutral-500/70">
                    {user.email}
                  </span>
                </div>
              </div>

              <span className="text-sm tracking-wider">{user.role}</span>
              <BookOpen
                className="size-4 text-neutral-500/70 hover:text-[#0f4c81] cursor-pointer"
                name="View details"
              />
            </div>
          ))
        ) : (
          <span>No users found</span>
        )}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold mt-5">Announcements</h1>
          <span className="text-neutral-500/70 text-sm">
            Viewing of all announcements from {municipality.name}
          </span>
        </div>
      </div>
      <div className="space-y-5 mt-5 flex flex-col justify-center items-center">
        {announcements.map((announcement, index) => (
          <AnnouncementCard key={index} {...announcement} canManage={true} />
        ))}
      </div>
    </>
  );
}

export default MunicipalityDetails;
