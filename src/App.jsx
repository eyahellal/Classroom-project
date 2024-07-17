import { NavBar } from "./components/navbar";
import { Content } from "./components/content";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col">
      <Content/>
      </div>
    </div>
  );
}

export default App;
