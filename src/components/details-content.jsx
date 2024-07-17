import { Posting } from "./posting";
import Posts from "./posts";

export default function DetailsContent() {
  return (
    <div className="flex w-4/5 flex-col gap-y-5 ">
      <Posting />
     <Posts />
    </div>
  );
}
