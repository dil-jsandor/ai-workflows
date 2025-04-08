import {Handle, Position} from "@xyflow/react";

type RiskManagerOutputNodeProps = {
    data: {
        riskCount: number
    }
}

export default function RiskManagerOutputNode(props: RiskManagerOutputNodeProps) {
    return (
        <>
            <div className="w-[200px] h-[200px] border-2 border-[#282E37] rounded-[12px] flex flex-col p-[8px]">
                <span className="text-md text-nowrap text-center">Risk Manager Output</span>
            </div>
            <Handle id="a" type="target" position={Position.Left} />
    </>
);
}