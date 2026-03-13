import { useNavigate, useParams } from "react-router-dom";
import type { Driver } from "../models/Driver.model";
import { ArrowLeft, Truck } from "lucide-react";
import { MANANGER_DRIVERS } from "../consts/route.mananger";
import { useState } from "react";
import type { Area } from "../models/Area.model";
import TripCard from "../components/ui/TripCard";

function DriverProfile() {
    const areas :Area[]=[{
      _id: 1,
      name: "Mailula",
      sections: [
        {
          _id: 1,
          name: "Section 1",
          image_url: ["./mask.png", "./mask.png", "./mask.png"],
        },
        { _id: 2, name: "Section 2", image_url: ["./mask.png"] },
      ],
    },]
  const { _id } = useParams();
  const navigate = useNavigate();
  const [trips] = useState<Area[]>(areas);
  const statusColors = {
    available: "bg-emerald-100 text-emerald-700",
    on_trip: "bg-blue-100 text-blue-700",
    offline: "bg-slate-100 text-slate-500",
  };
  const driver: Driver = {
    _id: _id || "",
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    status: "available",
    lastTripDate: "2023-01-01",
    totaltrips: 10,
    phoneNumber: "+1234567890",
    profile_url: "",
  };
  return (
    <div className="flex flex-col space-y-5">
      <button
        onClick={() => navigate(MANANGER_DRIVERS)}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Drivers
      </button>

      {/* Driver profile card */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6">
        <div className="flex items-center gap-5">
          <div className="h-16 w-16 rounded-full bg-linear-to-br from-[#0f4c81] to-[#38bdf8] flex items-center justify-center text-2xl font-bold text-white shrink-0 overflow-hidden">
            {driver.profile_url ? (
              <img
                src={driver.profile_url}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              driver.name?.[0] || "D"
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-xl font-bold text-slate-900">
                {driver.name} {driver.surname}
              </h1>
              <span
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium ${driver.status == "available" ? statusColors.available : driver.status == "on trip" ? statusColors.on_trip : statusColors.offline}`}
              >
                {driver.status?.replace("_", " ") || "offline"}
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-0.5">{driver.email}</p>
            {driver.phoneNumber && (
              <p className="text-sm text-slate-400">{driver.phoneNumber}</p>
            )}
          </div>
          <div className="text-right shrink-0">
            <p className="text-2xl font-bold text-[#0f4c81]">
              {driver.totaltrips}
            </p>
            <p className="text-xs text-slate-400">Total Trips</p>
          </div>
        </div>
        {/* Trips list */}
      </div>
      {/* Needs fixing UI */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Previous Trips
        </h2>
        {trips.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200/60 p-10 text-center">
            <Truck className="h-8 w-8 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">No trips found for this driver</p>
          </div>
        ) : (
          trips.map((trip) => (
            <TripCard updateAt="2026-03-02T15:00:00" status="available" name="" key={trip._id} area={trip} initials={`${driver.name[0]} ${driver.surname[0]}`}/>
          ))
        )}
      </div>
    </div>
  );
}

export default DriverProfile;
