import { useState } from "react";
import RiskManagerSidebar from "../components/RiskManagerSidebar.tsx";
import { Button } from "@mui/material";

export default function WorkflowDetail() {
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

    return (
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
    );
}
