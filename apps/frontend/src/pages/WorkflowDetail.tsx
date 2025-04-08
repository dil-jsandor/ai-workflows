import SmallSidebar from "../components/SmallSideBar";
import TopBar from "../components/TopBar.tsx";
import AIWorkflowsTitleBar from "../components/AIWorkflowsTitleBar.tsx";
import { useEffect, useState } from "react";
import { Workflow } from "../types/workflow.ts";
import { useParams } from "react-router-dom";
import WorkflowDetailCard from "../components/WorkflowDetailCard.tsx";
import RiskManagerSidebar from "../components/RiskManagerSidebar.tsx";
import { Button } from "@mui/material";

export default function WorkflowDetail() {
    const { id } = useParams<{ id: string }>();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleOpenSidebar = () => {
        setSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    const generatedRisk = {
        name: "Data Breach Risk",
        category: "IT/Infosec",
        description: "Potential data breach due to improper access control."
    };

    const [workflow, setWorkflow] = useState<Workflow | undefined>();
    const [input] = useState<string>(
        "Enterprise Information Security Audit Report Executive Overview This audit report reflects the outcomes of an in-depth review of information security practices at Company X, conducted over a six-week period in Q1 2025. The scope of the audit included policy adherence, operational effectiveness, and control implementation across core security domains such as access governance, infrastructure protection, data lifecycle management, and incident preparedness. Interviews were held with 23 key stakeholders across IT, Compliance, HR, and line-of- business units. The findings presented herein reflect not only technical assessments but also cultural and procedural maturity of Company X’s security posture. A number of areas were observed to operate in line with good practices, while others exhibited inconsistencies in execution or documentation that could benefit from increased oversight. Audit Scope and Approach The audit included infrastructure spanning two data centers, multiple cloud-hosted environments (including AWS and Azure), and remote user endpoints. Coverage also extended to major third-party service providers offering services such as identity federation, financial transaction processing, and HR information systems. The approach blended policy review, system configuration validation, user access analysis, physical security walkthroughs, and review of recent incident handling. Specific attention was paid to the effectiveness of security governance processes and cross- departmental consistency of implementation. Governance and Policy Framework The company has established a centralized Information Security Governance Committee that meets quarterly and is chaired by the CISO. Policy documents are hosted on the internal SharePoint portal and are version-controlled. While policy coverage is comprehensive, interviews indicated varied levels of familiarity across departments, particularly in non-IT business units. Some policy documents, including the Remote Access Standard and Media Disposal Guideline, had not been updated in over 18 months. The security strategy is aligned with ISO/IEC 27001:2022 and the NIST Cybersecurity Framework. However, control mapping to framework categories is informal, and control owners are not consistently documented.",
    );

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
        let result = input;
        for (const step of workflow!.steps) {
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
            console.log(result);
        }
    };

    return (
        <div id="screen" className="w-screen h-screen flex bg-white text-black">
            <SmallSidebar/>
            <div>
                <h1>Workflow detail</h1>
                <Button variant="contained" onClick={handleOpenSidebar}>
                    Add Risk
                </Button>

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
                        <WorkflowDetailCard
                            workflow={workflow}
                            onStart={() => startWorkflow()}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}