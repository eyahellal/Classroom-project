import { SideBar } from "./sidebar";
import { Main } from "./main";


export function Content(){
    return(
        <div className="flex w-full">
        <SideBar/>
         <Main/>
        </div>
    )
}
