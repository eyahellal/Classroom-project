import { MainSection } from "./mainSection";

import { Nav } from "./navbar";

export function Main() {
  return (
    <div className="h-screen w-full bg-white ">
      <Nav />
      <MainSection />
    </div>
  );
}
