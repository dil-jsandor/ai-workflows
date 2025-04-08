import {callBedrock} from "../ai-client";

type Input = {
    results: string[]
};

export const generateRiskStep = async (input: string): Promise<string> => {
    let data: Input;

    try {
        const parsed = JSON.parse(input);

        if (Array.isArray(parsed.results)) {
            data = parsed;
        } else {
            data = { results: [input] };
        }
    } catch {
        data = { results: [input] };
    }

    const prompts = data.results.map(async section => {
        const prompt = `
        You are a risk analysis assistant.
        The following input text is taken from an official corporate document. Your task is to carefully analyze the content and extract all **potential security or business risks** based on the information in the text.
        The generated risk data cannot contains PII or PHI.
        Please return your answer as a **JSON array** where each object represents a specific risk.
        **If you cannot find any, than just send only an empty JSON array as an answer**.
        
        Each risk object should contain the following keys:
        - "title": a short, descriptive name for the risk, has to be unique
        - "description": a brief explanation of the nature of the risk
        - "category": the appropriate category based on the list below
        
        Allowed categories:
        - "Operational"
        - "IT/Infosec"
        - "Financial"
        - "Regulatory/Compliance"
       
        Input text:
        ${section}
        `;

        const response = await callBedrock(prompt);
        console.log(response);
        return JSON.parse(response.content[0].text);
    });

    const nestedResponses = await Promise.all(prompts);
    const flatResponses = nestedResponses.flat();

    return JSON.stringify({ results: flatResponses }, null, 2);
};
