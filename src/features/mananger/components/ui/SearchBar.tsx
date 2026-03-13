import { Search } from 'lucide-react';
import { memo } from 'react'
interface SearchBarProps {
    value?: string;
    placeholder?:string;
    onChange?: (value: string) => void;
}
function  SearchBar({  value, onChange,placeholder }: SearchBarProps) {
  return (
    <div className="relative w-full my-5 place-self-center">
        <Search className='size-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-neutral-500/50'/>
        <input type="text" placeholder={placeholder??"Search"} value={value} onChange={(e) => onChange?.(e.target.value)} className='border-2 focus:outline-none active:outline-none border-neutral-500/10 pl-10 w-full py-2 text-xs rounded-lg' />
    </div>
  )
}

export default  memo(SearchBar)