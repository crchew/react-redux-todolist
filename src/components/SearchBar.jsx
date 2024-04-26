import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {

  return (
    <form className="relative">
      <div className="relative">
        <input type="search" placeholder="Quick Find" className="w-full rounded-full bg-slate-300 p-3 text-center" />
        <button className="absolute left-1 top-1/2 -translate-y-1/2 p-4 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  )
}