import { memo } from "react";

interface InputFieldDropDownProps {
  value?: string;
  onChange?: (value: string) => void;
  label: string;
  placeholder?: string;
  options: { label: string; value: string }[];
}

function InputFieldDropDown({
  value = "",
  onChange,
  label,
  placeholder = "Select an option",
  options,
}: InputFieldDropDownProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xs font-semibold text-neutral-500/70">
        {label}
      </label>

      <select
      title={label}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border-3 border-neutral-400/30 active:outline-neutral-600 focus:outline-neutral-500 w-full rounded-lg px-4 py-1 focus:ring-0 bg-white text-neutral-500/90 text-xs"
      >
        {/* Placeholder */}
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((option) => (
          <option className="text-neutral-800" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default memo(InputFieldDropDown);