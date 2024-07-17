import { Banner } from "./banner";
import Details from "./details";

export function MainSection() {
  return (
    <div className=" pt-8 px-36 flex flex-col gap-x-2 gap-y-5 bg-white  ">
      <Banner />
      <Details />
    </div>
  );
}
