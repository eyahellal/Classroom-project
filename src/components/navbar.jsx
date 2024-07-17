import { CiCalendar } from "react-icons/ci";
import { RiDriveLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
export function Nav(){
    return(
    <nav className= "p-5 h-12 w-full border-b-2 flex items-center justify-between ">
    <ul className="flex gap-x-8 text-slate-600">
        <li>stream</li>
        <li>classwork</li>
        <li>people</li>
        <li>Grades</li>
    </ul>
    <div className="flex gap-5">
    <CiCalendar />
    <RiDriveLine />
    <IoSettingsOutline />



    </div>
</nav>)
}