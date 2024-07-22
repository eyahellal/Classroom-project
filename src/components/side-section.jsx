import { ClassCodeCard } from "./classCode";
import { UpcomingClass } from "./UpcomingClass";

export function SideSection(){
    return(
        <div className="w-1/5">
            <ClassCodeCard />
            <UpcomingClass/>
        </div>
    )
}