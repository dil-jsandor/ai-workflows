import {Handle, Position} from "@xyflow/react";

type PdfInputNodeProps = {
    data: {
        value: string,
        onValueChanged: (value: string) => void
    }
}

export default function PdfInputNode(props: PdfInputNodeProps) {
    return (
        <>
            <div className="w-[200px] h-[200px] border-2 border-[#282E37] rounded-[12px] flex flex-col p-[8px]">
                <span className="text-sm text-nowrap text-center">PDF input</span>
            </div>
            <Handle id="a" type="source" position={Position.Right}/>
        </>
    );
}