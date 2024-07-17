import CodingImg from "../assets/coding.avif";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Edit from "../assets/editer.png";
export function Banner() {
  return (
    <section
      className="flex flex-col grow items-start justify-end
         bg-slate-600 h-44 rounded-md p-5 relative"
      style={{ backgroundImage: `url(${CodingImg})`, height: "200px" }}
    >
      <h2 className="text-white text-4xl ">Formation React</h2>

      <IoMdInformationCircleOutline className="w-8 h-8 tems-start justify-self-start absolute bottom-2 right-2" />
      <img
        src={Edit}
        alt="google-classroom"
        className="w-8 h-8 tems-start justify-self-start absolute top-2 right-2"
      />
    </section>
  );
}
