import SmallSidebar from "../components/SmallSideBar";
import TopBar from "../components/TopBar.tsx";
import AIWorkflowsTitleBar from "../components/AIWorkflowsTitleBar.tsx";
import { useEffect, useState } from "react";
import { Workflow } from "../types/workflow.ts";
import { useParams } from "react-router-dom";
import WorkflowDetailCard from "../components/WorkflowDetailCard.tsx";
import RiskManagerSidebar, {GeneratedRiskData} from "../components/RiskManagerSidebar.tsx";
import {Step} from "../types/step.ts";
import {ReactFlowProvider} from "@xyflow/react";

export default function WorkflowDetail() {
    const { id } = useParams<{ id: string }>();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleOpenSidebar = () => {
        setSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    const [generatedRisk, setGeneratedRisk] = useState<GeneratedRiskData | undefined>();

    const [workflow, setWorkflow] = useState<Workflow | undefined>();
    const [input, setInput] = useState<string>('');
    const [finishedSteps, setFinishedSteps] = useState<Step[]>([]);
    const [inProgressStep, setInProgressStep] = useState<Step | undefined>(undefined);

    useEffect(() => {
        if (generatedRisk) {
            handleOpenSidebar();
        }
    }, [generatedRisk]);

    useEffect(() => {
        const getWorkflow = async () => {
            const response = await fetch(`http://localhost:8080/workflows/${id}`);
            let data: Workflow = await response.json();
            data = { ...data, createdAt: new Date(data.createdAt) };
            setWorkflow(data);
        };

        getWorkflow();
    }, [id]);

    const startWorkflow = async () => {
        setFinishedSteps([]);
        let result = input as (string | {results: any[]});
        for (const step of workflow!.steps) {setInProgressStep(step);
            const response = await fetch(
                `http://localhost:8080/steps/${step.stepId}/execute`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        input: JSON.stringify(result),
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            result = await response.json();
            setFinishedSteps(value => [...value, step]);
            setInProgressStep(undefined);
            console.log(result);
        }

        try {
            const risk: GeneratedRiskData = result?.results.find((risk:GeneratedRiskData) => risk.name && risk.description && risk.category);
            console.log('risk', risk);
            setGeneratedRisk(risk);
        }
        catch {
            console.log('last response', result);
        }
    };

    return (
        <div id="screen" className="w-screen h-screen flex bg-white text-black">
            <SmallSidebar/>
            <div>
                <RiskManagerSidebar
                    open={sidebarOpen}
                    onClose={handleCloseSidebar}
                    generatedRisk={generatedRisk}
                />
            </div>
            <div
                id="app-container"
                className="flex flex-col w-full h-screen overflow-auto"
            >
                <TopBar/>
                <div
                    id="app"
                    className="flex flex-col w-full h-[calc(100dvh-64px)] px-[36px] pb-[36px] gap-y-[36px]"
                >
                    <AIWorkflowsTitleBar/>
                    {workflow && (
                        <ReactFlowProvider>
                            <WorkflowDetailCard
                                workflow={workflow}
                                finishedSteps={finishedSteps}
                                inProgressStep={inProgressStep}
                                onStart={() => startWorkflow()}
                                onInputChanged={setInput}
                                startButtonDisabled={input === ''}
                            />
                        </ReactFlowProvider>
                    )}
                </div>
            </div>
        </div>
    );
}