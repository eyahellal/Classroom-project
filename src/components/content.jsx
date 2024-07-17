import { SideBar } from "./sidebar";
import { Main } from "./main";


export function Content(){
    return(
        <div className="flex w-full bg-red-300	">
        <SideBar/>
         <Main/>
        </div>
    )
}
