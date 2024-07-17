import { TopBar } from "./components/topbar";
import { Content } from "./components/content";

function App() {
  return (
    <div className="w-screen flex-col flex items-center">
      <TopBar />
      <Content />
    </div>
  );
}

export default App;
