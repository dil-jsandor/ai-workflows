import {Step} from "./step";

export type Workflow = {
    workflowId: number,
    title: string,
    description: string,
    createdAt: Date,
    steps: Step[]
};