import { memo } from 'react'
interface ActionButtonProps {
    label: string;
    isDisabled?: boolean;
    onClick?: () => void;
    Icon?: React.ComponentType<{ className?: string }>;
}

function ActionButton({ label, isDisabled, onClick, Icon }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        px-3 py-3 bg-[#0f4c81] text-white rounded-lg flex items-center justify-evenly space-x-2
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0f4c81]/80'}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span className='text-xs text-white font-bold text-center'>{label}</span>
    </button>
  )
}

export default memo(ActionButton)