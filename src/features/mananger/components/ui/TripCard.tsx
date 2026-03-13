import { memo } from "react";
import type { Area } from "../../models/Area.model";
import { Clock, MapPin } from "lucide-react";
import { formatAnnouncementDate } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import { MANANGER_DRIVER_PROFILE_DETAIL } from "../../consts/route.mananger";

interface TripCardProps {
  initials?: string;
  name?: string;
  area: Area;
  status: "on trip" | "available";
  updateAt:string
}
function TripCard({ initials, name, area, status,updateAt }: TripCardProps) {
  const navigate = useNavigate()
  return (
    <div className="p-4 border border-neutral-400/20 rounded-2xl bg-white flex flex-col space-y-4">
      <div className="flex flex-row justify-between items-center space-y-2 p-4" onClick={()=>navigate(MANANGER_DRIVER_PROFILE_DETAIL("1"))}>
        <div className="flex flex-row space-x-2">
          <div className="bg-linear-to-br from-blue-600 to-blue-900 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
            {initials && <span>{initials}</span>}
          </div>
          <div className="flex flex-col space-y-1">
            {name && <span className="font-semibold text-md">{name}</span>}
            <span className="text-neutral-500 text-xs">{area.name}</span>
          </div>
        </div>
        {/* Status */}
        <span
          className={`px-2 py-2 rounded-lg text-xs font-medium ${
            status === "on trip"
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-5 font-medium">
        {area.sections &&
          area.sections.map((section, index) => (
            <div key={index} className="text-xs text-neutral-500 ">
              <div className="flex flex-row space-x-3 items-center border-b-3 border-neutral-400/30 pb-3">
                <MapPin className="size-4" />
                <span>{section.name} </span>
                <Clock className="size-3" /> <span>{formatAnnouncementDate(updateAt)}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {section.image_url.length>0 ?
                  section.image_url.length > 0 &&
                  section.image_url.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={section.name}
                      className="w-full object-cover rounded-lg mt-4"
                    />
                  )):<div className="p-5 text-center">No update yet</div>}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default memo(TripCard);
