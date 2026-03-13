import React from "react";
export function MakeTrip({
  openPopup,
  setOpenPopup,
  initials,
  name,
  email,
  selectedArea,
  value,
  setSelectedArea,
  toggleAreaSections,
  setSelectedSections,
  area,
  String,
  section,
  isSelected,
  s,
  toggleSection
}) {
  return <Popup isOpen={openPopup} onClose={() => setOpenPopup(false)}>
          <div>
            <div className="flex flex-row space-x-2 bg-neutral-400/10 mt-5 p-4 rounded-lg">
              <div className="bg-linear-to-br from-blue-600 to-blue-900 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                <span>{initials}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-semibold text-md">{name}</span>
                <span className="text-neutral-500 text-xs">{email}</span>
              </div>
            </div>
            <div>
              <InputFieldDropDown value={selectedArea} onChange={value => {
          setSelectedArea(value);
          toggleAreaSections(value);
          setSelectedSections([]); // reset when area changes
        }} placeholder="Select an area" label="Select Area" options={areas.map(area => ({
          label: area.name,
          value: String(area._id)
        }))} />
              {showAreaSections.length > 0 && <div className="mt-4 flex flex-col space-y-3">
                  <span className="text-xs font-semibold text-neutral-500">
                    Select Sections
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    {showAreaSections.map(section => {
              const isSelected = selectedSections.some(s => s._id === section._id);
              return <div key={section._id} onClick={() => toggleSection(section)} className={`border rounded-lg p-2 text-xs text-center cursor-pointer transition
                            ${isSelected ? "bg-blue-500 text-white border-blue-500" : "border-neutral-300/40 hover:bg-blue-50"}`}>
                          {section.name}
                        </div>;
            })}
                  </div>
                </div>}
            </div>
          </div>
        </Popup>;
}
  