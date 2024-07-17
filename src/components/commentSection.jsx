import UserIcon from "../assets/user.png";
import SendIcon from "../assets/envoyer.png";

export function CommentSection() {
  return (
    <div className="flex align-center gap-6 grow w-full h-20 border-t-2 pt-5 pb-5 px-4  ">
      <img
        src={UserIcon}
        alt="google-classroom"
        className="w-8 h-8 relative top-1"
      />

      <div className="  w-full h-10  p-5 border-2 rounded-full border-slate-600 ">
        <input
          type="text"
          id="myInput"
          placeholder="add comment here "
          className="relative bottom-3 "
        />
      </div>
      <img
        src={SendIcon}
        alt="google-classroom"
        className="w-8 h-8 relative top-1"
      />
    </div>
  );
}
