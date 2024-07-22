import { VscKebabVertical } from "react-icons/vsc";

export function ClassCodeCard() {
  return (
    <div className="w-full p-3 border-2 rounded-md flex flex-col gap-4 relative">
      <VscKebabVertical className="absolute top-3 right-3" />

      <h5>class code</h5>
      <h3 className="text-blue-500 font-semibold text-lg"> yj7hj5klm</h3>
    </div>
  );
}
