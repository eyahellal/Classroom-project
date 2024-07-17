import UserIcon from "../assets/user.png"
import { CommentSection } from "./commentSection"
export function Post(props){
return(
    <div className="min-h-15 p-5 border-2 rounded-md flex flex-col gap-24">
        <div >
     <div className="flex gap-5 ">
            <img src={UserIcon} alt="google-classroom" className="w-8 h-8" />
            <p className="font-semibold">{props.userName}</p>
        </div>
    <p className="text-xs text-slate-500 relative left-14 bottom-2">{props.date}</p>
    <p>{props.text}</p>
    <a href="http://link.com"className="text-blue-500 underline">{props.link}</a>
    </div>
    <CommentSection/>
    </div>

)
}