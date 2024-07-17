import MenuIcon from "../assets/menu.png"
import classrommIcon from "../assets/google-classroom.png"
import dotMenu from "../assets/dots-menu.png"
import User from "../assets/user.png"


export function NavBar() {
  return(
  <nav className="flex  h-30 p-5 border-y-2 gap-x-8 items-center justify-between  ">
    <div className="flex  gap-x-5 items-center ">
      <img src={MenuIcon} alt="menu" className="w-4 h-4" />
      <img src={classrommIcon} alt="google-classroom" className="w-8 h-8" />
        <p className="text-2xl text-slate-400">Classroom Formation React</p>
        </div>

      <div className="flex gap-x-5 items-center">
      <img src={dotMenu} alt="google-classroom" className="w-4 h-4" />
      <img src={User} alt="google-classroom" className="w-8 h-8" />
      </div>

    
  </nav>
    
  )
 
}
