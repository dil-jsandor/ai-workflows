import {callBedrock} from "../ai-client";

type Input = {
    results: string[]
}

export const generateRiskStep = async (input: string): Promise<string> => {
    const data: Input = JSON.parse(input);
    const prompts = data.results.map(async paragraph => {
        const prompt = `Generate risk from the given text. The response should be in JSON format. It should have a title, description and a category. Available categories: Operational, IT/Infosec, Financial, Regulatory/Complience. Input text: ${paragraph}`
        const response = await callBedrock(prompt);
        return response.content[0].text;
    });
    const responses = await Promise.all(prompts);
    return JSON.stringify({results: responses});
};