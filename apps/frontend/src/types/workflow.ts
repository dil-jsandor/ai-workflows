import {Step} from "./step.ts";

export type Workflow = {
    workflowId: number,
    title: string,
    description: string,
    createdAt: Date,
    steps: Step[]
};
