import { ChevronDown, MapPin, Pencil, Plus, Trash, X } from "lucide-react";
import { memo, useState } from "react";
import type { Area } from "../../models/Area.model";
import type { Section } from "../../models/Section.model";
import Popup from "../../../shared/components/Popup";
import ActionButton from "../../../shared/components/ui/ActionButton";
import InputField from "../../../shared/components/ui/InputField";

interface AreaRowParam {
  area: Area;
  announcementNumber?: number;
}

function AreaRow({ area, announcementNumber }: AreaRowParam) {
  const [expanded, setExpanded] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editArea, setEditArea] = useState<Area | null>(null);

  const [form, setForm] = useState<{ name: string; sections: Section[] }>({
    name: "",
    sections: [],
  });

  const [sectionInput, setSectionInput] = useState("");
  const openEdits = (area: Area) => {
    setEditArea(area);

    setForm({
      name: area.name,
      sections: area.sections || [],
    });

    setOpenEdit(true);
  };

  const handleDelete = async (area: Area) => {
    if (!confirm(`Delete area "${area.name}"?`)) return;

    // TODO: call API here
  };

  const addSection = () => {
    const trimmed = sectionInput.trim();
    if (!trimmed) return;

    // Create a temporary section object with a generated _id
    const newSection: Section = {
      _id: Date.now().toString(), // temporary id, replace with real from API
      name: trimmed,
      image_url: [],
    };

    setForm((prev) => ({
      ...prev,
      sections: [...prev.sections, newSection],
    }));

    setSectionInput("");
  };

  const removeSection = (sectionId: string | number) => {
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.filter((s) => s._id !== sectionId),
    }));
  };

  const handleSubmit = () => {
    if (!form.name || form.sections.length === 0) return;

    if (editArea) {
      // update API
      console.log("Update area", form);
    } else {
      // create API
      console.log("Create area", form);
    }

    setOpenEdit(false);
  };

  return (
    <>
      <div className="w-full p-3 border border-neutral-500/10 rounded-xl bg-white/90 space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <div className="bg-blue-950/10 text-blue-900/60 rounded-lg p-4">
              <MapPin className="size-5" />
            </div>

            <div className="flex flex-col justify-between">
              <p>
                <span className="text-sm font-semibold">{area.name}</span>{" "}
                <span className="bg-black/60 text-white font-semibold py-1 px-2 text-xs rounded-lg">
                  {announcementNumber ?? 0} post monthly
                </span>
              </p>

              <span className="text-neutral-500/60 text-sm">
                {area.sections.length} sections
              </span>
            </div>
          </div>

          <div className="flex space-x-5 text-neutral-500/50">
            <Pencil
              className="size-4 cursor-pointer"
              onClick={() => openEdits(area)}
            />

            <Trash
              className="size-4 cursor-pointer"
              onClick={() => handleDelete(area)}
            />

            <ChevronDown
              className="size-4 cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            />
          </div>
        </div>

        {expanded && (
          <div className="pb-5 border-t border-slate-100 pt-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
              Sections
            </p>

            <div className="flex flex-wrap gap-2">
              {area.sections?.map((section) => (
                <span
                  key={section._id}
                  className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                >
                  {section.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* EDIT POPUP */}
      {openEdit && (
        <Popup isOpen={openEdit} onClose={() => setOpenEdit(false)}>
          <div className="space-y-4">
            <InputField
              label="Area Name"
              value={form.name}
              placeholder="e.g. North District"
              onChange={(v) => setForm((prev) => ({ ...prev, name: v }))}
            />

            {/* Sections */}
            <div>
              <label className="text-xs text-slate-500 mb-1.5">
                Sections <span className="text-red-500">*</span>
                <span className="text-slate-400 font-normal ml-1">
                  (at least one required)
                </span>
              </label>

              <div className="flex items-center gap-2">
                <InputField
                  label=""
                  value={sectionInput}
                  placeholder="e.g. Block A"
                  onChange={setSectionInput}
                />

                <button
                  title="Add section"
                  onClick={addSection}
                  className="rounded-xl p-2 h-9 mt-2 bg-[#0f4c81] text-white hover:opacity-90"
                >
                  <Plus className="size-4" />
                </button>
              </div>

              {form.sections.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-3">
                  {form.sections.map((s) => (
                    <span
                      key={s._id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0f4c81]/10 text-[#0f4c81] rounded-lg text-sm font-medium"
                    >
                      {s.name}

                      <button
                        title="close"
                        onClick={() => removeSection(s._id)}
                        className="hover:text-red-600 transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-red-500 mt-2">
                  Add at least one section
                </p>
              )}
            </div>

            <ActionButton
              label={editArea ? "Save Changes" : "Create Area"}
              onClick={handleSubmit}
            />
          </div>
        </Popup>
      )}
    </>
  );
}

export default memo(AreaRow);
