import { FaRegStar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";

export default function SidebarItems() {
  return (
    <div className="d-flex flex-column justify-start">
      <div>
        <section className="flex justify-evenly mt-3 p-3"><FaRegStar />Today</section>
      </div>
      <div>
        <section className="flex justify-evenly p-3"><FaRegCalendarAlt />Upcoming</section>
      </div>
      <div>
        <section className="flex justify-evenly p-3"><FaBoxArchive />Sometime</section>
      </div>
    </div>
  )
}