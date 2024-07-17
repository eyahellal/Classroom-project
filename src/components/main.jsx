import { MainSection } from "./mainSection";
import  Calendar from "../assets/calendar.png";
import  Drive from "../assets/google-drive.png";
import Settings from "../assets/settings.png";




export function Main(){
    return(
      <div className="h-screen w-full bg-white ">
        <nav className= "p-5 h-12 w-full border-b-2 flex items-center justify-between ">
            <ul className="flex gap-x-8 text-slate-600">
                <li>stream</li>
                <li>classwork</li>
                <li>people</li>
                <li>Grades</li>
            </ul>
            <div className="flex gap-5">
      <img src={Calendar} alt="" className="w-4 h-4" />
      <img src={Drive} alt="" className="w-4 h-4" />
      <img src={Settings} alt="" className="w-4 h-4" />



            </div>
        </nav>
        <MainSection/>
        
      </div>
    )
  
  
  }