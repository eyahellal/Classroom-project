import { IoMdMenu } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { CiMenuKebab } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

export function TopBar() {
  return (
    <nav className="flex w-full  h-30 p-5 border-y-2 gap-x-8 items-center justify-between  ">
      <div className="flex  gap-x-5 items-center ">
        <IoMdMenu />
        <SiGoogleclassroom />
        <p className="text-2xl text-slate-400">Classroom Formation React</p>
      </div>

      <div className="flex gap-x-5 items-center">
        <CiMenuKebab />
        <FaUserCircle />
      </div>
    </nav>
  );
}
