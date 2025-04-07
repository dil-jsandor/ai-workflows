import {callBedrock} from "../ai-client";

export const generateRiskStep = async (input: string): Promise<string> => {
    const prompt = `Generate risk from the given text. The response should be in JSON format. It should have a title, description and a category. Available categories: Operational, IT/Infosec, Financial, Regulatory/Complience. Input text: ${input}`;
    const response = await callBedrock(prompt);
    return response.content[0].text;
};