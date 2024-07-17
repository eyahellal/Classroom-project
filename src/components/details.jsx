import DetailsContent from "./details-content";
import { SideSection } from "./side-section";

export default function Details() {
  return (
    <div className="flex gap-x-2 w-full">
      <SideSection />
      <DetailsContent />
    </div>
  );
}
