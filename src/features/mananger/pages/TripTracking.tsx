import { useState, useEffect } from "react";
import { Loader2, X } from "lucide-react";
import moment from "moment";
import InputField from "../../shared/components/ui/InputField";
import SearchBar from "../components/ui/SearchBar";
import type { Area } from "../models/Area.model";
import TripCard from "../components/ui/TripCard";
import type { Trip } from "../models/Trip.model";
export default function TripTracking() {
  const [checkouts, setCheckouts] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [driverSearch, setDriverSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  useEffect(() => {
  const demoData: Trip[] = [
    {
      _id: 1,
      driver_name: "John Doe",
      area_name: "Mailula",
      status: "completed",
      updatedAt: "2026-03-05T09:30:00",
      sections: [
        {
          _id: 1,
          name: "Section 1",
          image_url: [
            "https://picsum.photos/300/200",
            "https://picsum.photos/301/200",
          ],
        },
         {
          _id: 2,
          name: "Section 2",
          image_url: [
            "https://picsum.photos/300/200",
            "https://picsum.photos/301/200","https://picsum.photos/300/200",
            "https://picsum.photos/301/200",
          ],
        },
      ],
    },
    {
      _id: 2,
      driver_name: "Peter Smith",
      area_name: "Mabopane",
      status: "on_site",
      updatedAt: "2026-03-06T12:00:00",
      sections: [
        {
          _id: 2,
          name: "Section A",
          image_url: [],
        },
      ],
    },
    {
      _id: 3,
      driver_name: "David Johnson",
      area_name: "Garankuwa",
      status: "pending",
      updatedAt: "2026-03-02T15:00:00",
      sections: [
        {
          _id: 3,
          name: "Zone 2",
          image_url: ["https://picsum.photos/302/200"],
        },
      ],
    },
  ];

  setTimeout(() => {
    setCheckouts(demoData);
    setLoading(false);
  }, 800);
}, []);

  const filters = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "On Site", value: "on_site" },
    { label: "Pending", value: "pending" },
  ];

  const filtered = checkouts.filter((c) => {
    if (filter !== "all" && c.status !== filter) return false;

    if (
      driverSearch &&
      !c.driver_name.toLowerCase().includes(driverSearch.toLowerCase())
    )
      return false;

    if (dateFrom && new Date(c.updatedAt) < new Date(dateFrom)) return false;

    if (dateTo && new Date(c.updatedAt) > new Date(dateTo + "T23:59:59"))
      return false;

    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-6 w-6 animate-spin text-[#0f4c81]" />
      </div>
    );
  }

  const today = moment().startOf("day");

  const todayItems = filtered.filter((c) =>
    moment(c.updatedAt).isSameOrAfter(today),
  );

  const olderItems = filtered.filter((c) =>
    moment(c.updatedAt).isBefore(today),
  );

  const renderCard = (c: Trip) => {
  const area: Area = {
    _id: c._id,
    name: c.area_name,
    sections: c.sections,
  };

  const initials = c.driver_name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <TripCard
      updateAt={c.updatedAt}
      key={c._id}
      initials={initials}
      name={c.driver_name}
      area={area}
      status={c.status === "completed" ? "available" : "on trip"}
    />
  );
};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Checkouts
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Monitor delivery checkouts
          </p>
        </div>

        <p className="text-sm text-slate-500 font-medium">
          {filtered.length} results
        </p>
      </div>

      {/* Status Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
              filter === f.value
                ? "bg-[#0f4c81] text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Search + Date Filters */}
      <div className="flex flex-col items-center sm:flex-row gap-3">
        <div className="relative flex-1 items-center">
          <SearchBar
            placeholder="Filter by driver name..."
            value={driverSearch}
            onChange={setDriverSearch}
          />

          {driverSearch && (
            <button
              title="close"
              onClick={() => setDriverSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-row gap-2 items-center text-slate-400">
          <InputField type="date" value={dateFrom} onChange={setDateFrom} />
          <span className="text-slate-400 text-xs">to</span>
          <InputField type="date" value={dateTo} onChange={setDateTo} />
          {(dateFrom || dateTo) && (
            <button
              title="close"
              onClick={() => {
                setDateFrom("");
                setDateTo("");
              }}
              className="text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {todayItems.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-700">
              Today's Trips
            </p>

            <div className="grid grid-cols-1 gap-4">
              {todayItems.map(renderCard)}
            </div>
          </div>
        )}

        {olderItems.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-400">Older Trips</p>

            <div className="grid grid-cols-1 gap-4">
              {olderItems.map(renderCard)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
