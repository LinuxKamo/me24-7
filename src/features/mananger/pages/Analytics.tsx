import { Truck, Users, MapPin, Clock } from "lucide-react";
import StatsCard from "../components/ui/StatsCard";
import type { Trip } from "../models/Trip.model";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import type { Anouncement } from "../models/Anouncement.model";
import { formatAnnouncementDate } from "../utils/date";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

function Analytics() {
  /* ---------------- DEMO TRIPS ---------------- */
  const announcements: Anouncement[] = [
    {
      Areas: ["North"],
      sections: ["A1"],
      likes: 5,
      content: "Water delivery schedule has been updated for this week.",
      date: "2026-02-20",
      announcerName: "Admin",
      Initials: "AD",
    },
    {
      Areas: ["South"],
      sections: ["B2"],
      likes: 2,
      content: "Emergency maintenance on the main pipeline.",
      date: "2026-02-18",
      announcerName: "Admin",
      Initials: "AD",
    },
    {
      Areas: ["East"],
      sections: ["C1"],
      likes: 0,
      content: "Hello world",
      date: "2026-03-01",
      announcerName: "Admin",
      Initials: "AD",
    },
  ];
  const totalLikes = announcements.reduce((sum, a) => sum + a.likes, 0);
  const totalComments = 1; // demo value since comments not in type

  const mostEngaged = [...announcements]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const trips: Trip[] = [
    {
      _id: 1,
      driver_name: "John",
      area_name: "North",
      status: "completed",
      updatedAt: "2026-03-03",
      sections: [],
    },
    {
      _id: 2,
      driver_name: "Sam",
      area_name: "South",
      status: "completed",
      updatedAt: "2026-03-04",
      sections: [],
    },
    {
      _id: 3,
      driver_name: "Mike",
      area_name: "East",
      status: "on_site",
      updatedAt: "2026-03-04",
      sections: [],
    },
    {
      _id: 4,
      driver_name: "Alex",
      area_name: "West",
      status: "pending",
      updatedAt: "2026-03-05",
      sections: [],
    },
    {
      _id: 5,
      driver_name: "David",
      area_name: "North",
      status: "completed",
      updatedAt: "2026-03-05",
      sections: [],
    },
    {
      _id: 6,
      driver_name: "Chris",
      area_name: "East",
      status: "on_site",
      updatedAt: "2026-03-06",
      sections: [],
    },
    {
      _id: 7,
      driver_name: "Tom",
      area_name: "North",
      status: "pending",
      updatedAt: "2026-03-06",
      sections: [],
    },
  ];

  /* ---------------- STATS ---------------- */

  const completedTrips = trips.filter((t) => t.status === "completed").length;

  const activeDrivers = new Set(trips.map((t) => t.driver_name)).size;

  const areaCount = new Set(trips.map((t) => t.area_name)).size;

  const stats = [
    {
      title: "Active Drivers",
      value: activeDrivers,
      Icon: Truck,
      bg_from: "from-blue-500",
      bg_to: "to-blue-600",
    },
    {
      title: "Completed Trips",
      value: completedTrips,
      Icon: MapPin,
      bg_from: "from-purple-500",
      bg_to: "to-purple-600",
    },
    {
      title: "Active Areas",
      value: areaCount,
      Icon: Users,
      bg_from: "from-orange-500",
      bg_to: "to-orange-600",
    },
  ];

  /* ---------------- WEEKLY TRIPS ---------------- */

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const weeklyTrips = days.map((day) => {
    const count = trips.filter(
      (t) =>
        new Date(t.updatedAt).toLocaleDateString("en-US", {
          weekday: "short",
        }) === day,
    ).length;

    return count;
  });

  /* ---------------- STATUS DATA ---------------- */

  const statusCounts = {
    completed: trips.filter((t) => t.status === "completed").length,
    on_site: trips.filter((t) => t.status === "on_site").length,
    pending: trips.filter((t) => t.status === "pending").length,
  };

  /* ---------------- AREA TRIPS ---------------- */

  const areaMap: Record<string, number> = {};

  trips.forEach((trip) => {
    areaMap[trip.area_name] = (areaMap[trip.area_name] || 0) + 1;
  });

  const areaLabels = Object.keys(areaMap);
  const areaValues = Object.values(areaMap);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">
          Analytics Dashboard
        </h1>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Clock className="h-4 w-4" />
          Last updated: Today
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            Icon={stat.Icon}
            bg_from={stat.bg_from}
            bg_to={stat.bg_to}
          />
        ))}
      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 gap-6">
        {/* Weekly Trips */}

        <div className="bg-white rounded-2xl border border-slate-200/60 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Weekly Trips
          </h2>

          <div className="h-56">
            <Bar
              data={{
                labels: days,
                datasets: [
                  {
                    label: "Trips",
                    data: weeklyTrips,
                    backgroundColor: "rgba(59,130,246,0.8)",
                    borderRadius: 6,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>

        {/* Trip Status */}

        <div className="bg-white rounded-2xl border border-slate-200/60 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Trip Status
          </h2>

          <div className="h-56">
            <Pie
              data={{
                labels: ["Completed", "On Site", "Pending"],
                datasets: [
                  {
                    data: [
                      statusCounts.completed,
                      statusCounts.on_site,
                      statusCounts.pending,
                    ],
                    backgroundColor: [
                      "rgba(34,197,94,0.8)",
                      "rgba(59,130,246,0.8)",
                      "rgba(251,146,60,0.8)",
                    ],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>

        {/* Area Trips */}

        <div className="bg-white rounded-2xl border border-slate-200/60 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Trips by Area
          </h2>

          <div className="h-56">
            <Bar
              data={{
                labels: areaLabels,
                datasets: [
                  {
                    label: "Trips",
                    data: areaValues,
                    backgroundColor: "rgba(139,92,246,0.8)",
                    borderRadius: 6,
                  },
                ],
              }}
              options={{
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>
      </div>

      {/* Announcement Engagement */}

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Announcement Engagement
        </h2>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xl font-bold">{totalComments}</p>
            <p className="text-sm text-slate-500">Total Comments</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xl font-bold">{totalLikes}</p>
            <p className="text-sm text-slate-500">Total Likes</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xl font-bold">{"Section"}</p>
            <p className="text-sm text-slate-500">Most active section</p>
          </div>
        </div>

        {/* Most Engaged Announcements */}

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">
            Most Engaged Announcements
          </h3>

          <div className="space-y-4">
            {mostEngaged.map((announcement, index) => (
              <div
                key={index}
                className="flex justify-between items-start text-sm"
              >
                <div>
                  <p className="text-slate-700">
                    {index + 1}. {announcement.content}
                  </p>

                  <div className="flex gap-4 mt-1 text-xs text-slate-500">
                    <span>👍 {announcement.likes} likes</span>
                    <span>💬 0 comments</span>
                  </div>
                </div>

                <span className="text-xs text-slate-400">
                  {formatAnnouncementDate(announcement.date)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Comments */}

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">
            Latest Comments
          </h3>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold">
              KM
            </div>

            <div>
              <p className="text-sm font-medium">Kamohelo Motaung</p>
              <p className="text-xs text-slate-500">hello</p>
            </div>

            <span className="ml-auto text-xs text-slate-400">5 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
