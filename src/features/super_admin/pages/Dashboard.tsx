import { memo } from "react";
import StatsCard from "../../mananger/components/ui/StatsCard";
import { Users, Activity, Megaphone, Flame } from "lucide-react";
import image from "../../../assets/back.png";
import AnnouncementCard from "../../shared/components/ui/AnnouncementCard";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold mt-5">Super Admin Dashboard</h1>
        <span className="text-neutral-500/70 text-sm">
          System-wide overview and analytics
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <StatsCard
          bg_from="from-indigo-700"
          bg_to="to-indigo-400"
          title="Total Users"
          value={1245}
          Icon={Users}
        />
        <StatsCard
          bg_from="from-emerald-700"
          bg_to="to-emerald-500"
          title="System Health"
          value={"99.9%"}
          Icon={Activity}
        />
        <StatsCard
          bg_from="from-rose-700"
          bg_to="to-rose-500"
          title="Total Announcements"
          value={84}
          Icon={Megaphone}
        />
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent System Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">System backup completed successfully</p>
                  <p className="text-xs text-slate-500">2 hours ago</p>
                </div>
              </div>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Success</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col space-y-4">
        <div className="flex items-center gap-2">
           <Flame className="w-5 h-5 text-orange-500" />
           <h2 className="text-lg font-semibold text-slate-800">Top 5 Most Engaged Announcements</h2>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <AnnouncementCard
            Areas={["System-Wide", "Pretoria", "Mailula"]}
            sections={["All Users", "Drivers"]}
            likes={256}
            commentsCount={45}
            content="Major system update completed successfully. All new features are now live for drivers and managers."
            date="2026-03-09"
            announcerName="System Administrator"
            Initials="SA"
            imageurl={[image]}
            canManage={true}
          />
          <AnnouncementCard
            Areas={["Pretoria"]}
            sections={["Water Services"]}
            likes={189}
            commentsCount={23}
            content="New guidelines for water dispatch in the Pretoria region have been updated based on feedback."
            date="2026-03-08"
            announcerName="System Administrator"
            Initials="SA"
            canManage={true}
          />
          <AnnouncementCard
            Areas={["Soshanguve", "Mabopane"]}
            sections={["Dispatch", "Logistics"]}
            likes={145}
            commentsCount={18}
            content="Please note the upcoming road closures this weekend in Soshanguve and adjust routes accordingly."
            date="2026-03-05"
            announcerName="System Administrator"
            Initials="SA"
            imageurl={[image, image]}
            canManage={true}
          />
          <AnnouncementCard
            Areas={["Garankuwa"]}
            sections={["Maintenance"]}
            likes={132}
            commentsCount={12}
            content="Scheduled maintenance for truck fleet A will begin next Monday."
            date="2026-03-02"
            announcerName="System Administrator"
            Initials="SA"
            canManage={true}
          />
        </div>
      </div>
    </>
  );
}

export default memo(Dashboard);
