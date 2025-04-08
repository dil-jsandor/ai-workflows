import { Workflow } from "../types/workflow.ts";
import { Box, Button, Typography } from "@mui/material";
import CalendarToday from "@mui/icons-material/CalendarToday";
import Person from "@mui/icons-material/Person";
import Info from "@mui/icons-material/Info";
import { ReactFlow } from "@xyflow/react";

export type WorkflowDetailCardProps = {
  workflow: Workflow;
  onStart: () => void;
};

export default function WorkflowDetailCard(props: WorkflowDetailCardProps) {
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  ];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

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
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
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
          onClick={() => props.onStart()}
        >
          START
        </Button>
      </div>
    </div>
  );
}
