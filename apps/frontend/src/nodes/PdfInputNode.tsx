import {Handle, Position} from "@xyflow/react";
import {TextItem, TextMarkedContent} from "pdfjs-dist/types/src/display/api";

import * as pdfjsLib from "pdfjs-dist";
import {Box} from "@mui/material";
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

type PdfInputNodeProps = {
    data: {
        onValueChanged: (value: string) => void
    }
}

function isTextItem(item: TextItem | TextMarkedContent): item is TextItem {
    return "str" in item && typeof item.str === "string";
}

function handlePdfInput(event: React.ChangeEvent<HTMLInputElement>, setInputText: (inputText: string) => void) {
    const file = event.target.files?.[0];
    if (!file) {
        console.log("No file selected.");
        return;
    }

    console.log("File selected:", file.name);

    const reader = new FileReader();

    reader.onload = async () => {
        const typedarray = new Uint8Array(reader.result as ArrayBuffer);
        console.log("File loaded as Uint8Array.");

        try {
            const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
            let fullText = "";

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();

                const pageText = content.items
                    .filter(isTextItem)
                    .map((item) => item.str)
                    .join(" ");

                fullText += pageText + "\n";
            }

            console.log("Extracted PDF Text:", fullText);
            setInputText(fullText);
        } catch (error) {
            console.error("Error extracting PDF text:", error);
        }
    };

    reader.readAsArrayBuffer(file);
}

export default function PdfInputNode(props: PdfInputNodeProps) {
    return (
        <>
            <div className="w-[200px] h-[200px] border-2 border-[#282E37] rounded-[12px] flex flex-col p-[8px]">
                <span className="text-md text-nowrap text-center">PDF input</span>
                <div className="flex flex-col items-center justify-center h-full gap-y-[8px]">
                    <Box
                        component="img"
                        src="/upload_pdf.svg"
                        alt="Upload pdf"
                        sx={{ width: 40, height: 40 }}
                    />
                    <input
                        type="file"
                        id="pdf-parse-input"
                        accept="application/pdf"
                        className="h-10 w-full border-2 py-2 px-4"
                        onChange={(e) => handlePdfInput(e, props.data.onValueChanged)}
                    />
                </div>
            </div>
            <Handle id="a" type="source" position={Position.Right}/>
        </>
    );
}