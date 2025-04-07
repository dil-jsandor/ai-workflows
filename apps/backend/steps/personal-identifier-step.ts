import {callBedrock} from "../ai-client";

export const personalIdentifierFilterStep = async (input: string): Promise<string> => {
    const prompt = `
    You are a data privacy assistant.
    You will receive a document (such as an employment agreement or contract) that may contain PII or PHI.
    Your task is to create a new version of the document that is structurally and content-wise identical to the original, except that all sensitive data is replaced with clearly labeled placeholders.
    Replace any other identifiable or private information with an appropriate placeholder label in ALL CAPS and within parentheses.
    Do not modify the document's structure, formatting, paragraph order, or legal clauses in any way. Only the sensitive information should be replaced.
    If there is no replaceable data than return the document without any change.

    Return the entire redacted document as plain text or in the same format as the original (if supported). Do not include commentary, explanations, or summaries—only output the redacted document.
    The given input: ${input}`;
    const response = await callBedrock(prompt);
    return response.content[0].text;
};
