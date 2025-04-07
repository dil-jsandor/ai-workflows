import Sidebar from "../components/SideBar.tsx";
import TopBar from "../components/TopBar.tsx";
import AIWorkflowsTitleBar from "../components/AIWorkflowsTitleBar.tsx";
import AIWorkflowsSearchAndFilterBar from "../components/AIWorkflowsSearchAndFilterBar.tsx";

export default function Workflows() {
  return (
      <div id="screen" className="w-screen h-screen flex bg-white text-black">
        <Sidebar/>
        <div id="app-container" className="flex flex-col w-full h-screen overflow-auto">
          <TopBar/>
          <div id="app" className="w-full h-[calc(100dvh-64px)] px-[36px]">
            <AIWorkflowsTitleBar />
            <AIWorkflowsSearchAndFilterBar />
          </div>
        </div>
      </div>
  );
}
