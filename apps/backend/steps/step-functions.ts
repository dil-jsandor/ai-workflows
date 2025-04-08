import {generateReportStep} from "./generate-report-step";
import {splitInputStep} from "./split-input-step";
import {generateRiskStep} from "./generate-risk-step";
import {generateSummaryStep} from "./generate-summary-step";
import {personalIdentifierFilterStep} from "./personal-identifier-step";
import {promptStep} from "./prompt-step";

type StepFunction = Record<string, (input: string, promptInput?: string) => Promise<string>>

export const stepFunctions: StepFunction = {
    "Generate Report": generateReportStep,
    "Split Input": splitInputStep,
    "Generate Risk": generateRiskStep,
    "Generate Summary": generateSummaryStep,
    "Personal Identifier Filter": personalIdentifierFilterStep,
    "Prompt": promptStep
}