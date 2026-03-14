import { useState } from "react";
import ActionButton from "../../shared/components/ui/ActionButton";
import { Plus, Pencil, Trash } from "lucide-react";
import SearchBar from "../../mananger/components/ui/SearchBar";
import Popup from "../../shared/components/Popup";
import InputField from "../../shared/components/ui/InputField";

function Department() {
  const [departments, setDepartments] = useState<
    { _id: string; name: string }[]
  >([
    { _id: "1", name: "Finance" },
    { _id: "2", name: "HR" },
  ]);

  const emptyDepartment = { _id: "", name: "" };

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(emptyDepartment);

  const handleChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const openCreateModal = () => {
    setIsEditing(false);
    setFormData(emptyDepartment);
    setShowModal(true);
  };

  const openEditModal = (department: { _id: string; name: string }) => {
    setIsEditing(true);
    setFormData(department);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    setDepartments((prev) => prev.filter((d) => d._id !== id));
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) return;

    if (isEditing) {
      setDepartments((prev) =>
        prev.map((d) => (d._id === formData._id ? formData : d)),
      );
    } else {
      const newDepartment = {
        _id: Date.now().toString(),
        name: formData.name,
      };

      setDepartments((prev) => [...prev, newDepartment]);
    }

    setShowModal(false);
    setFormData(emptyDepartment);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold mt-5">Departments</h1>
          <span className="text-neutral-500/70 text-sm">
            Overview of All departments
          </span>
        </div>

        <ActionButton
          label="New Department"
          Icon={Plus}
          onClick={openCreateModal}
        />
      </div>

      <SearchBar placeholder="Search Department" />

      {departments.length > 0 ? (
        <div className="flex flex-col space-y-3 mt-5">
          {departments.map((department) => (
            <div
              key={department._id}
              className="flex items-center justify-between p-4 border border-neutral-300 rounded-xl hover:bg-neutral-100/60 transition"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-200 flex items-center justify-center font-semibold text-neutral-600">
                  {department.name[0]}
                </div>

                <span className="font-medium text-sm text-neutral-700">
                  {department.name}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => openEditModal(department)}
                  className="p-2 rounded-lg bg-[#0f4c81]/10 text-[#0f4c81] hover:bg-[#0f4c81]/20 transition"
                >
                  <Pencil size={16} />
                </button>

                <button
                  onClick={() => handleDelete(department._id)}
                  className="p-2 rounded-lg bg-red-500/10 text-red-600 hover:bg-red-500/20 transition"
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <span className="text-neutral-500/70 text-sm">
            No departments found
          </span>
        </div>
      )}

      {/* CREATE / EDIT MODAL */}
      {showModal && (
        <Popup isOpen={showModal} onClose={() => setShowModal(false)}>
          <div>
            <h1 className="text-lg font-bold mb-3">
              {isEditing ? "Edit Department" : "New Department"}
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
                placeholder="Enter Department Name"
                value={formData.name}
                onChange={handleChange}
              />

              <div className="flex justify-end space-x-2 mt-4">
                <ActionButton
                  label="Cancel"
                  onClick={() => setShowModal(false)}
                />

                <ActionButton label={isEditing ? "Update" : "Create"} />
              </div>
            </form>
          </div>
        </Popup>
      )}
    </>
  );
}

export default Department;
