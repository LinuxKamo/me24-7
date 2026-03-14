import { memo } from "react";

interface InputFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  label?: string;
}
function InputField({
  value,
  onChange,
  placeholder,
  type,
  label,
}: InputFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xs font-semibold text-neutral-500/70">
        {label}
      </label>
      <input
        type={type || "text"}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="border-3 border-neutral-400/30 active:outline-neutral-500/60 focus:outline-neutral-500/60 w-full rounded-lg px-4 py-2 focus:ring-0 text-xs"
      />
    </div>
  );
}

export default memo(InputField);
