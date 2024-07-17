import  Calendar from "../assets/calendar.png";
import  Home from "../assets/accueil.png";
import  Teaching from "../assets/personnes.png";
import  Review from "../assets/fichier.png";
import  Settings from "../assets/settings.png";
import  Archive from "../assets/archiver.png";





export function SideBar() {
  return (
   <aside className="bg-white w-1/5 pt-5 h-screen flex flex-col px-0 border-r-2 ">
    <div className="border-b-2 flex flex-col gap-3 pb-5 w-full ">
      <div className="flex gap-5 items-center ml-5">
      <img src={Home} alt="" className="w-4 h-4" />
      <p>Home</p>
      </div>
      <div className="flex gap-5 items-center ml-5">
      <img src={Calendar} alt="" className="w-4 h-4" />
      <p>Agenda</p>
      </div>

      </div>
      <div className="border-b-2 flex flex-col gap-3 pb-5 w-full pt-5 ">
      <div className="flex gap-5 items-center ml-5">
      <img src={Teaching} alt="" className="w-4 h-4" />
      <p>teaching</p>
      </div>
      <div className="flex gap-5 items-center ml-5">
      <img src={Review} alt="" className="w-4 h-4" />
      <p>to review</p>
      </div>

      </div>
      <div className="border-b-2 flex flex-col gap-3 pb-5 w-full pt-5 ">
      <div className="flex gap-5 items-center ml-5">
      <img src={Archive} alt="" className="w-4 h-4" />
      <p>archive</p>
      </div>
      <div className="flex gap-5 items-center ml-5">
      <img src={Settings} alt="" className="w-4 h-4" />
      <p>settings</p>
      </div>

      </div>
    </aside>
  );
}
