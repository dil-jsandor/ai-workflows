import SmallSidebar from "../components/SmallSideBar";
import TopBar from "../components/TopBar.tsx";
import AIWorkflowsTitleBar from "../components/AIWorkflowsTitleBar.tsx";
import {useEffect, useState} from "react";
import {Workflow} from "../types/workflow.ts";
import { useParams } from "react-router-dom";
import WorkflowDetailCard from "../components/WorkflowDetailCard.tsx";

export default function WorkflowDetail() {
  const { id } = useParams<{ id: string }>();

  const [workflow, setWorkflow] = useState<Workflow | undefined>();

  useEffect(() => {
    const getWorkflow = async () => {
      const response = await fetch(`http://localhost:8080/workflows/${id}`);
      let data: Workflow = await response.json();
      data = {...data, createdAt: new Date(data.createdAt)}
      setWorkflow(data);
    };

    getWorkflow();
  }, [id]);

  return (
      <div id="screen" className="w-screen h-screen flex bg-white text-black">
          <SmallSidebar />
        <div id="app-container" className="flex flex-col w-full h-screen overflow-auto">
          <TopBar/>
          <div id="app" className="flex flex-col w-full h-[calc(100dvh-64px)] px-[36px] pb-[36px] gap-y-[36px]">
            <AIWorkflowsTitleBar/>
            {workflow && <WorkflowDetailCard workflow={workflow} />}
          </div>
        </div>
      </div>
  );
}
