import ActionButton from "../../shared/components/ui/ActionButton";
import { Plus } from "lucide-react";
import SearchBar from "../../mananger/components/ui/SearchBar";
import { useState } from "react";
import type { Municipality } from "../models/Municipality.model";
import Popup from "../../shared/components/Popup";
import InputField from "../../shared/components/ui/InputField";
import MunicipalityCard from "../components/ui/MunicipalityCard";

function Municipality() {
  const [municipalities, setMunicipalities] = useState<Municipality[]>([
    {
      _id: "1",
      name: "Voloorus",
      address: {
        street: "something",
        suburb: "some",
        province: "some",
        postalCode: "some",
        town: "some",
      },
    },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [selectedMunicipality, setSelectedMunicipality] =
    useState<Municipality | null>(null);

  const emptyMunicipality: Municipality = {
    _id: "",
    name: "",
    address: {
      street: "",
      suburb: "",
      province: "",
      postalCode: "",
      town: "",
    },
  };

  const [formData, setFormData] = useState<Municipality>(emptyMunicipality);

  const handleChange = (
    field: keyof Municipality["address"] | "name",
    value: string,
  ) => {
    if (field === "name") {
      setFormData((prev) => ({
        ...prev,
        name: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    }
  };

  const openCreateModal = () => {
    setIsEditing(false);
    setFormData(emptyMunicipality);
    setShowModal(true);
  };

  const openEditModal = (municipality: Municipality) => {
    setIsEditing(true);
    setFormData(municipality);
    setShowModal(true);
  };

  const openDeleteModal = (municipality: Municipality) => {
    setSelectedMunicipality(municipality);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (!selectedMunicipality) return;

    setMunicipalities((prev) =>
      prev.filter((m) => m._id !== selectedMunicipality._id),
    );

    setShowDeleteModal(false);
    setSelectedMunicipality(null);
  };

  const handleSubmit = () => {
    if (isEditing) {
      setMunicipalities((prev) =>
        prev.map((m) => (m._id === formData._id ? formData : m)),
      );
    } else {
      const newMunicipality: Municipality = {
        ...formData,
        _id: Date.now().toString(),
      };

      setMunicipalities((prev) => [...prev, newMunicipality]);
    }

    setShowModal(false);
    setFormData(emptyMunicipality);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold mt-5">Municipalities</h1>
          <span className="text-neutral-500/70 text-sm">
            Overview of All municipalities
          </span>
        </div>

        <ActionButton
          label="New Municipality"
          Icon={Plus}
          onClick={openCreateModal}
        />
      </div>

      <SearchBar placeholder="Search Municipality" />

      {municipalities.length > 0 ? (
        <div className="flex flex-col space-y-5 mt-5">
          {municipalities.map((municipality) => (
            <MunicipalityCard
              key={municipality._id}
              municipality={municipality}
              onEdit={() => openEditModal(municipality)}
              onDelete={() => openDeleteModal(municipality)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <span className="text-neutral-500/70 text-sm">
            No municipalities found
          </span>
        </div>
      )}

      {/* CREATE / EDIT MODAL */}
      {showModal && (
        <Popup isOpen={showModal} onClose={() => setShowModal(false)}>
          <div>
            <h1 className="text-lg font-bold mb-3">
              {isEditing ? "Edit Municipality" : "New Municipality"}
            </h1>

            <form
              className="flex flex-col space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <InputField
                label="Name"
                placeholder="Enter Municipality Name"
                value={formData.name}
                onChange={(value) => handleChange("name", value)}
              />

              <InputField
                label="Street Details"
                placeholder="Enter Municipality Street Details"
                value={formData.address.street}
                onChange={(value) => handleChange("street", value)}
              />

              <InputField
                label="Suburb"
                placeholder="Enter Municipality Suburb"
                value={formData.address.suburb}
                onChange={(value) => handleChange("suburb", value)}
              />

              <InputField
                label="Province"
                placeholder="Enter Municipality Province"
                value={formData.address.province}
                onChange={(value) => handleChange("province", value)}
              />

              <InputField
                label="Postal Code"
                placeholder="Enter Municipality Postal Code"
                value={formData.address.postalCode}
                onChange={(value) => handleChange("postalCode", value)}
              />

              <InputField
                label="Town"
                placeholder="Enter Municipality Town"
                value={formData.address.town}
                onChange={(value) => handleChange("town", value)}
              />

              <div className="flex flex-row justify-end space-x-2 mt-4">
                <ActionButton
                  label="Cancel"
                  onClick={() => setShowModal(false)}
                  color="bg-red-500"
                />

                <ActionButton label={isEditing ? "Update" : "Create"} />
              </div>
            </form>
          </div>
        </Popup>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {showDeleteModal && (
        <Popup
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
        >
          <div className="flex flex-col space-y-4">
            <h1 className="text-lg font-bold">Delete Municipality</h1>

            <p className="text-sm text-neutral-500">
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {selectedMunicipality?.name}
              </span>
              ?
            </p>

            <div className="flex justify-end space-x-2">
              <ActionButton
                label="Cancel"
                onClick={() => setShowDeleteModal(false)}
              />

              <ActionButton
                label="Delete"
                color="bg-red-500"
                onClick={confirmDelete}
              />
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}

export default Municipality;
