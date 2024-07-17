import UserIcon from "../assets/user.png"
import ShareIcon from "../assets/partager.png"

            <img src={UserIcon} alt="google-classroom" className="w-8 h-8" />

export function Posting(){
    return(
        <div className="min-h-22 p-5 border-2 rounded-md flex gap-5  w-full items-center shadow">
            <img src={UserIcon} alt="google-classroom" className="w-8 h-8" />
            
<input type="text" id="myInput" placeholder="announce something to your class"className="border-none grow"/>
<img src={ShareIcon} alt="google-classroom" className="w-6 h-6" />
            
             </div>
    )
}