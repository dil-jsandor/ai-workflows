import {callBedrock} from "../ai-client";

export const splitInputStep = async (input: string): Promise<string> => {
    const prompt = `Split the given text into smaller parts by sentences. The format has to be a string array json and its elements should be the split string parts. Input: ${input}`;
    console.log('a');
    const response = await callBedrock(prompt);
    console.log(response);
    return response.content[0].text;
}