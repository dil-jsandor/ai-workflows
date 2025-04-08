import TopBar from "../components/TopBar.tsx";
import AIWorkflowsTitleBar from "../components/AIWorkflowsTitleBar.tsx";
import AIWorkflowsSearchAndFilterBar from "../components/AIWorkflowsSearchAndFilterBar.tsx";
import CreateWorkflowWithAiButton from "../components/CreateWorkflowWithAiButton.tsx";
import { Workflow } from "../types/workflow.ts";
import AIWorkflowCard from "../components/AIWorkflowCard.tsx";
import { useEffect, useState } from "react";
import SmallSidebar from "../components/SmallSideBar.tsx";

export default function Workflows() {
  const [workflows, setWorkflows] = useState<Workflow[] | undefined>();

  useEffect(() => {
    const getWorkflows = async () => {
      const response = await fetch("http://localhost:8080/workflows");
      let data: Workflow[] = await response.json();
      data = data.map((x) => ({ ...x, createdAt: new Date(x.createdAt) }));
      setWorkflows(data);
    };

    getWorkflows();
  }, []);

  return (
    <div id="screen" className="w-screen h-screen flex bg-white text-black">
      <SmallSidebar />
      <div
        id="app-container"
        className="flex flex-col w-full h-screen overflow-auto"
      >
        <TopBar />
        <div id="app" className="w-full h-[calc(100dvh-64px)] px-[36px]">
          <AIWorkflowsTitleBar />
          <AIWorkflowsSearchAndFilterBar />
          <div className="w-full h-full flex flex-col">
            <CreateWorkflowWithAiButton />
            <div className="flex flex-wrap py-[24px] gap-[24px]">
              {workflows?.map((workflow) => (
                <AIWorkflowCard key={workflow.workflowId} workflow={workflow} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
