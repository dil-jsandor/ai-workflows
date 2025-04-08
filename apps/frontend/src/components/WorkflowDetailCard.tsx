import { Workflow } from "../types/workflow.ts";
import { Box, Button, Typography } from "@mui/material";
import CalendarToday from "@mui/icons-material/CalendarToday";
import Person from "@mui/icons-material/Person";
import Info from "@mui/icons-material/Info";
import {ReactFlow, useReactFlow} from "@xyflow/react";
import PdfInputNode from "../nodes/PdfInputNode.tsx";
import {useEffect, useState} from "react";
import StepNode from "../nodes/StepNode.tsx";
import RiskManagerOutputNode from "../nodes/RiskManagerOutputNode.tsx";
import {Step} from "../types/step.ts";

export type WorkflowDetailCardProps = {
  workflow: Workflow;
  onStart: () => void;
  finishedSteps: Step[],
  inProgressStep: Step | undefined,
  onInputChanged: (inputText: string) => void,
  startButtonDisabled: boolean
};

const nodeTypes = {
    pdfInput: PdfInputNode,
    stepNode: StepNode,
    riskManagerOutput: RiskManagerOutputNode
}

export default function WorkflowDetailCard(props: WorkflowDetailCardProps) {
    const [stepNodes, setStepNodes] = useState<any>();
    const [stepEdges, setStepEdges] = useState<any>();

    const { fitView } = useReactFlow();
    useEffect(() => {
        fitView()
    }, [stepNodes, fitView]);

    useEffect(() => {
        const nodes: any[] = props.workflow.steps.map((step, index) => ({
            id: `node-${step.stepId}`,
            type: 'stepNode',
            data: {
                step: step,
                state: step.stepId === props.inProgressStep?.stepId
                    ? 'in-progress'
                    : props.finishedSteps.some(s => s.stepId === step.stepId)
                        ? 'done'
                        : 'finished'
            },
            position: { x: (index + 1) * 300, y: 0 }
        }));

        nodes.unshift({
            id: `node-input`,
            type: 'pdfInput',
            position: { x: 0, y: 0 },
            data: {
                onValueChanged: (value: string) => {
                    console.log('onValueChanged', value);
                    props.onInputChanged(value);
                }
            }
        });

        nodes.push({
            id: `node-output`,
            type: 'riskManagerOutput',
            position: { x: nodes.length * 300, y: 0 },
            data: {}
        });

        const edges = [];
        for (let i = 0; i < nodes.length - 1; i++) {
            edges.push({
                id: `edge-${i}-to-${i+1}`,
                source: nodes[i].id,
                target: nodes[i+1].id,
                animated: true,
            });
        }

        setStepNodes(nodes);
        setStepEdges(edges);
    }, [props]);

  return (
    <div className="p-[26px] flex flex-col border border-gray-200 rounded-[12px] gap-y-[8px] w-full h-full">
        <div
        id="workflow-logo-and-title"
        className="flex items-center gap-x-[8px]"
      >
        <Box
          component="img"
          src="/workflow.svg"
          alt="Workflow"
          sx={{ width: 27, height: 27 }}
        />
        <span className="font-semibold text-[25px]">
          {props.workflow.title}
        </span>
      </div>

      <div
        id="workflow-date-and-owner"
        className="flex gap-x-[8px] items-center"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CalendarToday
            sx={{ fontSize: 15, color: "rgba(40, 46, 55, 0.6)", mr: 1 }}
          />
          <Typography
            sx={{
              fontFamily: "'Plus Jakarta Sans', Helvetica",
              fontWeight: 500,
              color: "rgba(40, 46, 55, 0.6)",
              fontSize: "12px",
            }}
          >
            {props.workflow.createdAt.toDateString()}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Person
            sx={{ fontSize: 15, color: "rgba(40, 46, 55, 0.6)", mr: 1 }}
          />
          <Typography
            sx={{
              fontFamily: "'Plus Jakarta Sans', Helvetica",
              fontWeight: 500,
              color: "rgba(40, 46, 55, 0.6)",
              fontSize: "12px",
            }}
          >
            Owned by Platformer
          </Typography>
        </Box>
      </div>

      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
        <Info
          sx={{
            fontSize: 15,
            color: "rgba(40, 46, 55)",
            mr: 1,
          }}
        />
        <Typography
          sx={{
            fontFamily: "'Plus Jakarta Sans', Helvetica",
            fontWeight: 500,
            color: "#282e37",
            fontSize: "14px",
            textAlign: "justify",
            lineHeight: "13.9px",
            width: "100%",
          }}
        >
          {props.workflow.description}
        </Typography>
      </Box>

        <div id="react-flow-container" className="h-full w-full">
            <ReactFlow
                nodes={stepNodes}
                edges={stepEdges}
                nodeTypes={nodeTypes}
                nodesDraggable={false}
                nodesConnectable={false}
                panOnDrag={false}
                proOptions={{hideAttribution: true}}
            />
        </div>

        <div className="flex justify-center items-center w-full">
            <Button
                variant="outlined"
                sx={{
                    fontFamily: "'Plus Jakarta Sans', Helvetica",
                    fontWeight: 800,
            fontSize: "18px",
            borderRadius: "8px",
            height: "60px",
            width: "400px",
            border: "2px solid #282e37",
            color: "#282E37",
          }}
          disabled={props.startButtonDisabled}
          onClick={() => props.onStart()}
        >
          START
        </Button>
      </div>
    </div>
  );
}
