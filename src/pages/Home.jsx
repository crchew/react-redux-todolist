import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import SidebarItems from "../components/SidebarItems";
import { useSelector } from "react-redux";

export default function HomePage() {
  const notes = useSelector((state) => state.notes);
  
  return (
    <div className="flex h-screen">
      <div className="w-3/12 bg-gray-200 p-4">
        <SearchBar />
        <SidebarItems />
      </div>

      <div className="w-9/12 p-4">
        <div className="grid grid-cols-3 h-auto">
          <NotesList notes={notes}/>
        </div>
      </div>
    </div>
  );
}
