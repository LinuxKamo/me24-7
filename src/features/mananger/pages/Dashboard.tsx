import { memo } from "react";
import StatsCard from "../components/ui/StatsCard";
import { ArrowUpDown, MapPin, Truck } from "lucide-react";
import AnnouncementCard from "../../shared/components/ui/AnnouncementCard";
import image from "../../../assets/back.png";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold mt-5">Dashboard</h1>
        <span className="text-neutral-500/70 text-sm">
          Overview of water delivery operations
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <StatsCard
          bg_from="from-green-700"
          bg_to="to-green-400"
          title="Active trucks"
          value={4}
          Icon={Truck}
        />
        <StatsCard
          bg_from="from-blue-700"
          bg_to="to-blue-500"
          title="Total Trucks"
          value={4}
          Icon={Truck}
        />
        <StatsCard
          bg_from="from-amber-700"
          bg_to="to-amber-500"
          title="Assigned Today"
          value={4}
          Icon={MapPin}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col space-y-1">
          <h2 className="text-xl font-semibold mt-5">Recent Announcements</h2>
          <span className="text-neutral-500/70 text-sm">
            Latest updates and news for your areas
          </span>
        </div>
        <button className="flex flex-row space-x-3 items-center border border-neutral-500/20 px-3 py-1 rounded-lg text-xs font-medium text-neutral-600/80 lg:h-10 bg-white">
          <ArrowUpDown className="size-4" />
          <span>Newest first</span>
        </button>
      </div>
      <div className="space-y-5 mt-5 flex flex-col justify-center items-center">
        <AnnouncementCard
          Areas={[
            "Mailula",
            "Mabopane",
            "Soshanguve",
            "Garankuwa",
            "Pretoria",
            "Mabopane",
            "Soshanguve",
            "Garankuwa",
            "Pretoria",
          ]}
          sections={[
            "Section 1",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
          ]}
          likes={12}
          content="This is an announcement for Mailula area."
          date="2026-03-04"
          announcerName="John Doe"
          Initials="JD"
          imageurl={[image]}
          canManage={true}
        />
        <AnnouncementCard
          Areas={["Mailula"]}
          sections={[
            "Section 1",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
            "Section 2",
          ]}
          likes={12}
          content="This is an announcement for Mailula area."
          date="2026-02-17"
          announcerName="John Doe"
          Initials="JD"
          imageurl={[image]}
          canManage={true}
        />
        <AnnouncementCard
          Areas={["Mailula"]}
          sections={["Section 1", "Section 2"]}
          likes={12}
          content="This is an announcement for Mailula area."
          date="2026-02-18"
          announcerName="John Doe"
          Initials="JD"
          imageurl={[
            image,
            image,
            image,
            image,
            image,
            image,
            image,
            image,
            image,
            image,
            image,
            image,
            image,
          ]}
          canManage={true}
        />
        <AnnouncementCard
          Areas={["Mailula"]}
          sections={["Section 1", "Section 2"]}
          likes={12}
          content="This is an announcement for Mailula area."
          date="2026-02-19"
          announcerName="John Doe"
          Initials="JD"
          canManage={true}
        />
        <AnnouncementCard
          Areas={["Mailula"]}
          sections={["Section 1", "Section 2"]}
          likes={12}
          content="This is an announcement for Mailula area."
          date="2026-02-20"
          announcerName="John Doe"
          Initials="JD"
          imageurl={[image]}
          canManage={true}
        />
      </div>
    </>
  );
}

export default memo(Dashboard);
