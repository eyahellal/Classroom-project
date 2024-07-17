import { FaHome } from "react-icons/fa";
import { Button } from "./button";
import { FaRegCalendar } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { IoArchiveOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";


export function SideBar() {
  return (
    <aside className="bg-white w-1/5 pt-5 h-screen flex flex-col px-0 border-r-2 ">
      <div className="border-b-2 flex flex-col gap-3 pb-5 w-full ">
        <Button title="Home" icon={<FaHome className="w-4 h-4" />} />
        <Button title="Calendar" icon={<FaRegCalendar className="w-4 h-4" />} />
      </div>
      <div className="border-b-2 flex flex-col gap-3 pb-5 w-full pt-5 ">
        <Button title="Teaching" icon={<FaChalkboardTeacher />} />
        <Button title="To-review" icon={<VscPreview />} />
      </div>
      <div className="border-b-2 flex flex-col gap-3 pb-5 w-full pt-5 ">
        <Button title="Archived classes" icon={<IoArchiveOutline />} />
        <Button title="Settings" icon={<IoSettingsOutline />
}/>
      </div>
    </aside>
  );
}
