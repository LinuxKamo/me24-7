import { Eye, Pencil, Trash } from "lucide-react";
import ActionButton from "../../../shared/components/ui/ActionButton";
import type { Municipality } from "../../models/Municipality.model";
import { useNavigate } from "react-router-dom";
import { SUPER_ADMIN_MUNICIPALITY_DETAILS_BYID } from "../../consts/routes.super_admin";

interface MunicipalityCardProps {
  municipality: Municipality;
  onEdit: () => void;
  onDelete: () => void;
}

function MunicipalityCard({
  municipality,
  onEdit,
  onDelete,
}: MunicipalityCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row justify-between hover:bg-neutral-300/20 p-1 rounded-lg"
      title={
        municipality.name +
        " " +
        municipality.address.town +
        " " +
        municipality.address.suburb +
        " " +
        municipality.address.province +
        " " +
        municipality.address.postalCode +
        " " +
        municipality.address.street
      }
    >
      <div className="flex flex-row space-x-5">
        <div className="w-20 h-15 rounded-lg bg-neutral-500/20 text-center flex items-center justify-center">
          <span className="text-2xl font-bold text-neutral-500">
            {municipality.name[0]}
          </span>
        </div>

        <div className="flex flex-col space-y-2 text-sm text-neutral-500">
          <span className="font-bold">{municipality.name}</span>
          <span className="font-semibold text-xs">
            {municipality.address.town}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row space-x-2 py-2">
        <ActionButton
          label="Edit"
          color="bg-[#0f4c81]"
          Icon={Pencil}
          onClick={onEdit}
        />

        <ActionButton
          label="Delete"
          color="bg-red-500"
          Icon={Trash}
          onClick={onDelete}
        />

        <ActionButton
          label="View"
          color="bg-[#0f4c81]/80"
          Icon={Eye}
          onClick={() =>
            navigate(SUPER_ADMIN_MUNICIPALITY_DETAILS_BYID(municipality._id))
          }
        />
      </div>
    </div>
  );
}

export default MunicipalityCard;
