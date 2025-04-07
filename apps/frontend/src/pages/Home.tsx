import "@xyflow/react/dist/style.css";
import TopBar from "../components/TopBar.tsx";
import TopBanner from "../components/TopBanner.tsx";
import RiskAndStrategyRow from "../components/RiskAndStrategyRow.tsx";
import AuditAndAnalyticsRow from "../components/AuditAndAnalyticsRow.tsx";
import ComplianceAndEthicsRow from "../components/ComplianceAndEthicsRow.tsx";
import IssuesAndReportingRow from "../components/IssuesAndReportingRow.tsx";
import EducationAndCertificationsRow from "../components/EducationAndCertificationsRow.tsx";
import ResourcesRow from "../components/ResourcesRow.tsx";
import Sidebar from "../components/SideBar.tsx";

export default function Home() {
  return (
    <div id="screen" className="w-screen h-screen flex bg-white text-black">
        <Sidebar />
        <div id="app-container" className="flex flex-col w-full h-screen overflow-auto">
            <TopBar />
            <div id="app" className="w-full h-[calc(100dvh-64px)]">
                <TopBanner />
                <RiskAndStrategyRow />
                <div className="w-full h-[48px]"></div>
                <AuditAndAnalyticsRow />
                <div className="w-full h-[48px]"></div>
                <ComplianceAndEthicsRow />
                <div className="w-full h-[48px]"></div>
                <IssuesAndReportingRow />
                <div className="w-full h-[48px]"></div>
                <EducationAndCertificationsRow />
                <div className="w-full h-[48px]"></div>
                <ResourcesRow />
                <div className="w-full h-[48px]"></div>
            </div>
        </div>
    </div>
  );
}
